# VUA APP – Quản lý spa, thẩm mỹ viện và nha khoa

VUA APP là phần mềm quản lý tất cả trong một cho ngành làm đẹp: lịch hẹn, khách hàng (CRM), thu ngân (POS), kho, nhân sự, lương, tài chính và tiếp thị. Lời hứa cốt lõi vẫn giữ nguyên: **không để sót khách nào**, mỗi sáng app cho biết hôm nay cần nhắc lịch, chăm sóc và thu nợ những ai.

App tùy biến theo ngành: nút **Spa / Nha khoa** ở thanh bên đổi bộ dữ liệu và cách gọi tên (Liệu trình ↔ Phác đồ, Kỹ thuật viên ↔ Bác sĩ, Khách hàng ↔ Bệnh nhân).

## Giao diện

- Thanh bên tối chia nhóm: Tổng quan · Khách & lịch hẹn · Dịch vụ & hàng hóa · Nhân sự & lương · Tài chính & phát triển · Hệ thống.
- Thanh trên cùng: tìm kiếm toàn hệ thống (phím tắt `/`), chọn giao diện màu, chuông thông báo, nút **+ Đặt lịch nhanh**.
- **10 giao diện màu** (Hồng Rose Gold, Ngọc lục bảo, Oải hương, Xanh đại dương, San hô, Champagne, Rượu vang, Bạc hà, Than chì, Đào hồng) và chế độ Sáng / Tối / Theo máy.
- Mọi bảng dữ liệu có: **Thêm mới, Sửa, Xóa**, tìm kiếm, sắp xếp theo cột, xuất **PDF / Excel / CSV** (file Excel .xlsx tạo ngay trong trình duyệt, không cần mạng).
- Chạy tốt trên điện thoại: thanh điều hướng dưới cùng và menu trượt.

## Tính năng

| Nhóm | Trang | Chức năng |
| --- | --- | --- |
| Tổng quan | Bảng điều khiển | 8 chỉ số (doanh thu, hóa đơn, lịch hẹn, chờ xác nhận, doanh thu và chi phí tháng, tổng khách, nhân viên), biểu đồ doanh thu 14 ngày, doanh thu theo nhóm dịch vụ, việc cần chú ý |
| | Việc hôm nay | Hàng thẻ tab đồng bộ: Lịch hôm nay (mặc định, đầy đủ chi tiết và nút cập nhật trạng thái, thu tiền), Nhắc lịch ngày mai, liệu trình chưa hẹn buổi tiếp, sắp hết liệu trình, lâu chưa quay lại, sinh nhật, còn nợ; nút Nhắn Zalo chép sẵn tin nhắn |
| | Thu ngân (POS) | Giỏ hàng dịch vụ / sản phẩm / gói liệu trình, giảm giá %, mã khuyến mãi, VAT, tip, 4 hình thức thanh toán, ghi nợ, thu nợ, in hóa đơn |
| Khách & lịch hẹn | Khách hàng (CRM) | Bảng khách với số lần đến, đã chi, công nợ, nhãn; lọc VIP / liệu trình / còn nợ / lâu chưa đến; hồ sơ chi tiết có ghi chú |
| | Lịch hẹn | Danh sách lịch hẹn lọc theo thời gian và trạng thái, sửa, xác nhận, hoàn thành. Khi đặt lịch, kỹ thuật viên đã có lịch trùng giờ bị khóa (tính theo thời lượng dịch vụ), app gợi ý giờ trống và người đang rảnh |
| | Lịch đặt chỗ | Lịch theo tuần (giờ × ngày, màu theo trạng thái, bấm ô trống để đặt) và theo ngày |
| | Danh sách chờ | Khách muốn đặt khi kín lịch, nút Xếp lịch ngay |
| | Ghi chú khách | Dị ứng, sở thích, khiếu nại…; ghi chú ghim hiện khi đặt lịch và mở lịch hẹn |
| Dịch vụ & hàng hóa | Dịch vụ & gói | Bảng giá dịch vụ theo nhóm, thời lượng, hoa hồng, nhắc quay lại; gói liệu trình |
| | Sản phẩm & kho | Mã vạch, giá vốn, giá bán, lãi gộp, tồn kho, cảnh báo sắp hết, điều chỉnh kho; bán ở POS tự trừ kho. **Tải lên Excel** (.xlsx/.csv) để nhập hàng loạt: tự nhận cột tiếng Việt/Anh, xem trước, báo dòng lỗi, cập nhật hoặc cộng tồn cho sản phẩm đã có, tự thêm nhà cung cấp; có **Tải file mẫu** |
| | Nhà cung cấp & nhập | Danh bạ nhà cung cấp, đơn nhập hàng; nhận hàng tự cộng kho và ghi chi phí |
| Nhân sự & lương | Nhân viên | Mã NV, vai trò, lương cơ bản, doanh số, hoa hồng, ca và chấm công hôm nay, tạm ứng |
| | Xếp ca | Lưới tuần nhân viên × ngày, chép tuần trước, gửi lịch ca qua Zalo. **Đăng ký trước** của từng nhân viên: ngày xin nghỉ, ca không thể làm, nguyện vọng ca, số giờ mục tiêu. **Đề xuất lịch tuần**: xếp ngẫu nhiên không vi phạm đăng ký, ưu tiên nguyện vọng, bám giờ mục tiêu, luôn có người mở/đóng cửa, phủ các lịch hẹn đã đặt; xem trước rồi mới áp dụng. Ô xếp trái đăng ký được viền đỏ |
| | Chấm công | Vào ca / ra ca, đi muộn theo giờ ca, bảng công tháng |
| | Bảng lương | Lương theo công + hoa hồng + tip − phạt muộn − tạm ứng |
| Tài chính | Hóa đơn | Tất cả hóa đơn, xem chi tiết, in lại, thu nợ |
| | Chi phí | Ghi khoản chi theo nhóm, lợi nhuận tạm tính |
| | Báo cáo | Doanh thu, chi phí, lợi nhuận, giá trị hóa đơn TB, doanh thu theo ngày / nhóm dịch vụ, hoa hồng NV, dịch vụ và sản phẩm bán chạy, nguồn khách |
| | Khuyến mãi & tiếp thị | Mã giảm giá (% hoặc số tiền, hạn dùng, đơn tối thiểu); chiến dịch nhắn tin Zalo theo nhóm khách |
| Hệ thống | Cài đặt & giao diện | Tên, chủ, hotline, địa chỉ, logo; VAT, tài khoản ngân hàng, lời cảm ơn trên hóa đơn; 10 giao diện; công chuẩn, phạt muộn, ca làm việc; sao lưu / khôi phục / nạp dữ liệu mẫu |
| | Hướng dẫn | Cách dùng hằng ngày |

## Chạy thử

App là một file `index.html`, không cần cài đặt.

- **Trên máy:** mở `index.html` bằng Chrome (dữ liệu mẫu đã nhúng sẵn).
- **GitHub Pages:** Settings → Pages, chọn nhánh `main`, thư mục gốc. Sau 1–2 phút app chạy tại `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

Dữ liệu được lưu trong trình duyệt của từng máy (localStorage). Vào **Cài đặt → Dữ liệu & sao lưu** để tải file sao lưu `.json` và khôi phục khi đổi máy. Máy nào đã dùng bản cũ, bấm **Nạp lại dữ liệu mẫu** để xem dữ liệu mẫu mới (sản phẩm, nhà cung cấp, chi phí, khuyến mãi…).

## Cấu trúc dữ liệu

Mỗi ngành là một không gian dữ liệu riêng `ws/{spa|nhakhoa}/...`, nền cho mô hình nhiều cơ sở dùng chung (multi-tenant) sau này.

| Bộ sưu tập | Nội dung |
| --- | --- |
| settings/main | Tên, chủ, hotline, địa chỉ, logo, VAT, tài khoản ngân hàng, giao diện, công chuẩn, phạt muộn, giờ vào ca, ca làm việc (`shifts`) |
| services | Dịch vụ: nhóm, giá, thời lượng, % hoa hồng, số ngày nhắc quay lại, đang bán |
| packages | Gói liệu trình: dịch vụ, số buổi, giá |
| staff | Nhân viên: vai trò, điện thoại, ngày vào làm, lương cơ bản, màu, đang làm/đã nghỉ |
| customers | Khách hàng: tên, điện thoại, xưng hô, sinh nhật, nguồn, nhãn, ghi chú |
| notes | Ghi chú khách: loại, nội dung, người ghi, ghim |
| appointments | Lịch hẹn: khách, dịch vụ, nhân viên, ngày giờ, trạng thái, liệu trình, doanh số và hoa hồng khi hoàn thành |
| waitlist | Danh sách chờ: khách, dịch vụ, ngày và khung giờ mong muốn, trạng thái |
| courses | Liệu trình của khách: tổng buổi, đã dùng, giá |
| sales | Hóa đơn: số HĐ, các mục (dịch vụ/sản phẩm/gói), tạm tính, giảm giá, mã KM, VAT, tip, tổng, đã trả, hình thức |
| payments | Các lần thanh toán |
| products | Sản phẩm: mã vạch, nhóm, giá vốn, giá bán, tồn kho, mức báo sắp hết, nhà cung cấp |
| suppliers / purchases | Nhà cung cấp và đơn nhập hàng (dòng hàng, trạng thái, ngày nhận) |
| expenses | Chi phí: ngày, nhóm, nội dung, số tiền, hình thức, người nhận |
| promos | Mã khuyến mãi: loại, mức giảm, đơn tối thiểu, thời gian, số lần dùng |
| contacts | Đánh dấu đã liên hệ trong ngày |
| attendance / roster | Chấm công và lịch ca: mỗi nhân viên một bản ghi mỗi tháng |
| shiftreq | Đăng ký ca theo tuần (`{staffId}_{thứ 2 đầu tuần}`): ngày xin nghỉ, ca không làm được theo ngày, nguyện vọng ca, số giờ mục tiêu, ghi chú |
| advances | Tạm ứng lương |

## Đăng nhập & phân quyền theo bộ phận

Mở app sẽ gặp màn hình đăng nhập. Mỗi vai trò chỉ thấy đúng menu của bộ phận mình, giúp vận hành và kiểm tra độc lập từng luồng.

| Vai trò | Tài khoản / mật khẩu | Được vào |
| --- | --- | --- |
| Chủ / Quản lý | `admin` / `admin123` | Toàn bộ hệ thống, kể cả Cài đặt và Tài khoản & phân quyền |
| Lễ tân | `letan` / `letan123` | Việc hôm nay, Khách hàng, Lịch hẹn, Lịch đặt chỗ, Danh sách chờ, Ghi chú |
| Thu ngân | `thungan` / `thungan123` | Thu ngân (POS), Hóa đơn, Khách hàng |
| Quản lý kho | `kho` / `kho123` | Dịch vụ & gói, Sản phẩm & kho, Nhà cung cấp & nhập |
| Nhân sự & lương | `nhansu` / `nhansu123` | Nhân viên, Xếp ca, Chấm công, Bảng lương |
| Kế toán | `ketoan` / `ketoan123` | Bảng điều khiển, Hóa đơn, Chi phí, Báo cáo, Khuyến mãi |
| Kỹ thuật viên — Hoa | `hoa` / `hoa123` | Việc hôm nay, Lịch đặt chỗ, **tự chấm công của riêng Hoa** |
| Kỹ thuật viên — Mai | `mai` / `mai123` | Việc hôm nay, Lịch đặt chỗ, **tự chấm công của riêng Mai** |
| Kỹ thuật viên — Linh | `linh` / `linh123` | Việc hôm nay, Lịch đặt chỗ, **tự chấm công của riêng Linh** |
| Kỹ thuật viên — Thảo | `thao` / `thao123` | Việc hôm nay, Lịch đặt chỗ, **tự chấm công của riêng Thảo** |

Trên màn hình đăng nhập có sẵn khung "Tài khoản dùng thử" — bấm vào là điền nhanh để đổi vai trò, tiện cho việc kiểm tra từng bộ phận. Chủ/Quản lý vào **Tài khoản & phân quyền** (menu Hệ thống) để thêm/sửa/xóa tài khoản thật cho nhân viên, đổi mật khẩu, gán đúng vai trò, và **liên kết mỗi tài khoản Kỹ thuật viên/Bác sĩ tới đúng hồ sơ nhân viên** — trang Chấm công khi đó chỉ hiện đúng 1 dòng của người đang đăng nhập với 2 nút to **Vào ca / Ra ca**, không thấy và không đụng được vào giờ công của người khác. Chủ/Quản lý và Nhân sự vẫn thấy đầy đủ bảng chấm công của tất cả mọi người như trước, kèm nút "Chấm tất cả có mặt" để chấm nhanh hàng loạt khi cần.

**Giới hạn:** đây là khóa mềm ở phía trình duyệt (client-side), tài khoản và mật khẩu lưu trong `localStorage` của từng máy — phù hợp để phân luồng thao tác nội bộ và demo cho từng bộ phận, **không phải cơ chế bảo mật chống truy cập trái phép thực sự** (ai mở DevTools trên máy đó vẫn xem được danh sách tài khoản). Muốn bảo mật thật, cần bản có backend (mục dưới).

## Thu lead tự động

Có sẵn 1 trang đăng ký công khai `dang-ky.html` — dán link này vào bio Facebook/TikTok, nút CTA quảng cáo, hoặc tin nhắn Zalo:

```
https://vua-app.vercel.app/dang-ky.html
```

Khách điền Họ tên + SĐT + Dịch vụ quan tâm → lead lưu tự động vào kho dữ liệu chung (Vercel Blob), không phụ thuộc máy nào. Thêm `?src=facebook`, `?src=tiktok`, `?src=zalo` vào cuối link để biết lead đến từ đâu; thêm `?nganh=nhakhoa` nếu muốn form mặc định qua khối Nha khoa.

Trong app, vào **Danh sách chờ** → bấm **Đồng bộ lead mới**: mọi lead chưa xử lý sẽ tự động thêm vào danh sách chờ kèm ghi chú "Quan tâm… · Nguồn…", sẵn sàng để bấm **Xếp lịch ngay**.

**Lưu ý:** tính năng này chạy bằng API phía máy chủ (Vercel Serverless Function + Vercel Blob), nên **chỉ hoạt động trên bản Vercel** (`vua-app.vercel.app`), không chạy được trên GitHub Pages hay khi mở file `index.html` trực tiếp (2 cách đó không có backend).

## Chưa có

- Xác thực phía máy chủ (hash mật khẩu, chống truy cập trái phép thực sự), nhiều cơ sở dùng chung trên máy chủ
- Gửi Zalo ZNS tự động (hiện là nút mở Zalo kèm tin nhắn chép sẵn)
- Thanh toán online, hóa đơn điện tử theo quy định thuế

Bản chính thức cần backend (ví dụ PostgreSQL + API) để lưu dữ liệu tập trung và bảo mật.
