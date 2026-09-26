const { put, list, del, get } = require('@vercel/blob');

const PREFIX = 'leads/';

async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  return Buffer.concat(chunks).toString('utf8');
}

async function readLead(pathname) {
  try {
    const res = await get(pathname, { access: 'private' });
    if (!res || !res.stream) return null;
    const text = await streamToString(res.stream);
    return JSON.parse(text);
  } catch (e) {
    console.error('readLead error:', pathname, e && e.message);
    return null;
  }
}

async function listLeads() {
  const { blobs } = await list({ access: 'private', prefix: PREFIX, limit: 1000 });
  const leads = await Promise.all(blobs.map((b) => readLead(b.pathname)));
  return leads.filter(Boolean);
}

function digitsOnly(v) {
  return String(v || '').replace(/\D/g, '');
}

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    if (req.method === 'POST') {
      const body = req.body || {};
      const name = String(body.name || '').trim().slice(0, 120);
      const phone = digitsOnly(body.phone);
      if (!name || phone.length < 9 || phone.length > 11) {
        return res.status(400).json({ ok: false, error: 'Thiếu tên hoặc số điện thoại không hợp lệ.' });
      }
      const id = 'lead_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
      const lead = {
        id,
        name,
        phone,
        service: String(body.service || '').trim().slice(0, 200),
        note: String(body.note || '').trim().slice(0, 500),
        source: String(body.source || 'website').trim().slice(0, 50) || 'website',
        mode: body.mode === 'nhakhoa' ? 'nhakhoa' : 'spa',
        createdAt: new Date().toISOString(),
      };
      await put(PREFIX + id + '.json', JSON.stringify(lead), {
        access: 'private',
        addRandomSuffix: false,
        contentType: 'application/json',
      });
      return res.status(200).json({ ok: true });
    }

    if (req.method === 'GET') {
      const leads = await listLeads();
      const mode = req.query && req.query.mode;
      let out = mode ? leads.filter((l) => l.mode === mode) : leads;
      out = out.slice().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
      return res.status(200).json({ ok: true, leads: out });
    }

    if (req.method === 'DELETE') {
      const ids = (req.body && req.body.ids) || [];
      if (!Array.isArray(ids) || !ids.length) return res.status(400).json({ ok: false, error: 'ids trống.' });
      await Promise.all(ids.map((id) => del(PREFIX + id + '.json').catch(() => {})));
      return res.status(200).json({ ok: true, count: ids.length });
    }

    res.status(405).json({ ok: false, error: 'Method not allowed' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ ok: false, error: 'Lỗi máy chủ, thử lại sau.' });
  }
};
