# VUA APP – CRM cho spa, thẩm mỹ viện và nha khoa

VUA APP là bản demo phần mềm quản lý khách hàng (CRM) dành cho ngành làm đẹp. App được xây quanh một lời hứa: **không để sót khách nào**. Mỗi sáng, app cho biết hôm nay cần nhắc lịch, chăm sóc và thu nợ những ai.

App tùy biến theo ngành: nút **Spa / Nha khoa** đổi bộ dữ liệu và cách gọi tên (Liệu trình ↔ Phác đồ, Kỹ thuật viên ↔ Bác sĩ, Khách hàng ↔ Bệnh nhân).

## Tính năng

| Tab | Chức năng |
| --- | --- |
| Hôm nay | Nhắc lịch ngày mai, khách chưa hẹn buổi tiếp trong liệu trình, liệu trình sắp hết, khách lâu chưa quay lại / đến hạn tái khám, sinh nhật, công nợ. Nút "Nhắn Zalo" chép sẵn tin nhắn mẫu. |
| Lịch hẹn | Lịch theo ngày và theo nhân viên, báo trùng lịch, đổi trạng thái. "Hoàn thành" tự trừ buổi liệu trình và tính hoa hồng. |
| Khách | Tìm theo tên/số điện thoại, bộ lọc, hồ sơ khách (liệu trình, lịch sử, hóa đơn), nút "Thêm khách mới" và "Lưu & thêm khách khác". |
| Thu tiền | Dịch vụ lẻ, bán liệu trình, thu nợ. Trả thiếu tự ghi nợ. Tiền mặt / chuyển khoản / thẻ. |
| Báo cáo | Doanh thu 7 ngày, lượt phục vụ, khách mới, tỷ lệ không đến, hoa hồng nhân viên, dịch vụ làm nhiều nhất. |
| Nhân sự | Hồ sơ nhân viên, chấm công (vào ca/ra ca, đi muộn, nghỉ phép), bảng công tháng, bảng lương tự tính, tạm ứng. |

Bảng lương: **Thực lĩnh = lương cơ bản × công / công chuẩn + hoa hồng − phạt đi muộn − tạm ứng**. Công chuẩn, mức phạt và giờ vào ca chỉnh trong Cài đặt.

## Chạy thử

App là một file `index.html`, không cần cài đặt.

- **Trên máy:** mở `index.html` bằng Chrome. Để nạp dữ liệu mẫu từ `seed.json`, nên chạy qua một web server nhỏ, ví dụ `python3 -m http.server` rồi mở http://localhost:8000.
- **GitHub Pages:** vào Settings → Pages, chọn nhánh `main`, thư mục gốc. Sau 1–2 phút app chạy tại `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

Khi chạy độc lập như trên, dữ liệu được lưu trong trình duyệt của từng máy (localStorage). Lần mở đầu tiên, app nạp dữ liệu mẫu "Spa Hoa Mai" và "Nha khoa Nụ Cười Việt".

## Cấu trúc dữ liệu

Mỗi ngành là một không gian dữ liệu riêng `ws/{spa|nhakhoa}/...`. Đây cũng là nền cho mô hình nhiều spa dùng chung (multi-tenant) sau này.

| Bộ sưu tập | Nội dung |
| --- | --- |
| settings/main | Tên cơ sở, công chuẩn, phạt đi muộn, giờ vào ca |
| services | Dịch vụ: giá, thời lượng, % hoa hồng, số ngày nhắc quay lại |
| staff | Nhân viên: vai trò, điện thoại, ngày vào làm, lương cơ bản, màu, đang làm/đã nghỉ |
| packages | Gói liệu trình: dịch vụ, số buổi, giá |
| customers | Khách hàng: tên, điện thoại, xưng hô, sinh nhật, nguồn, nhãn, ghi chú |
| appointments | Lịch hẹn: khách, dịch vụ, nhân viên, ngày giờ, trạng thái, liệu trình, doanh số và hoa hồng khi hoàn thành |
| courses | Liệu trình của khách: tổng buổi, đã dùng, giá |
| sales / payments | Hóa đơn (tổng, đã trả) và các lần thanh toán |
| contacts | Đánh dấu đã liên hệ trong ngày |
| attendance | Chấm công: mỗi nhân viên một bản ghi mỗi tháng |
| advances | Tạm ứng lương |

## Chưa có trong bản demo

- Đăng nhập, phân quyền nhân viên, nhiều spa dùng chung trên máy chủ
- Gửi Zalo ZNS tự động (hiện là nút mở Zalo kèm tin nhắn chép sẵn)
- Sửa/xóa dịch vụ, quản lý kho, xếp ca làm việc
- Thanh toán online, hóa đơn điện tử

Bản chính thức cần backend (ví dụ PostgreSQL + API) để lưu dữ liệu tập trung và bảo mật.
