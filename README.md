
# 📚 HỆ THỐNG QUẢN LÝ HỌC TẬP TỰ ĐỘNG (OTA & AUTO-STATS)

> **Phát triển bởi:** TontonYuta
> **Mục tiêu:** Tự động hóa việc Build App, Cập nhật phiên bản qua Github và Thống kê điểm số qua Google Sheets + Gmail.

---

## 🛠 1. Cấu trúc Tài nguyên (Folder Structure)

Để tái sử dụng, Hân hãy giữ cấu trúc thư mục như sau:

* `src/config.ts`: Chứa Link Google Script và Version hiện tại.
* `android/`: Thư mục gốc chứa mã nguồn Android Studio.
* `build.bat`: File "thần thánh" để thực hiện mọi thao tác 1-Click.
* `icon.png` & `splash.png`: Ảnh đại diện và màn hình chờ của App.

---

## 🚀 2. Quy trình thiết lập cho Môn học mới

### Bước 1: Tạo Google Sheets & Script mới

1. Tạo một file Google Sheets mới (Đặt tên: *Diem_Mon_Vat_Ly_6*).
2. Mở **Extensions > Apps Script** và dán mã nguồn `Code.gs` (Bản có Gmail và Stats).
3. **Quan trọng:** Thay đổi `MY_GMAIL` trong Script thành Email nhận báo cáo.
4. **Deploy:** Chọn *New Deployment* > Type: *Web App* > Access: *Anyone*.
5. Copy link Web App URL thu được.

### Bước 2: Cập nhật App Source (React/Ionic/Capacitor)

1. Mở file `src/config.ts`:
* Dán Link Web App vào biến `API_URL`.


2. Mở file `capacitor.config.json`:
* Đổi `appId` (Ví dụ: `com.tontonyuta.physics6`) để không bị cài đè lên App Toán.



### Bước 3: Cấu hình File Build.bat

Mở `build.bat` bằng Notepad++, tìm đến **Phần 11** (Báo cáo Google Sheets) và dán link Web App mới vào lệnh `curl`.

---

## ⚡ 3. Hướng dẫn sử dụng hàng ngày (The 1-Click Flow)

Khi Hân muốn cập nhật bài tập mới cho học sinh:

1. **Chạy file `build.bat**`.
2. **Nhập tên App mới** (Nếu muốn đổi tên ngoài màn hình chính).
3. **Nhập số Version mới** (Ví dụ: `2.3.0`).
4. **Đợi tiếng "Bíp bíp"**:
* Hệ thống tự nén `update.zip`.
* Hệ thống tự đẩy lên Github Releases.
* Hệ thống tự báo về Google Sheets và gửi Gmail cho Hân.


5. **Học sinh:** Mở App lên sẽ thấy thông báo "Đã có bài tập mới", bấm nút là xong.

---

## ⚠️ 4. Các lỗi thường gặp & Cách xử lý (Troubleshooting)

| Lỗi | Nguyên nhân | Cách xử lý |
| --- | --- | --- |
| **Lỗi Kết nối (401/411)** | Chưa cấp quyền Gmail trong Script | Vào Script > Run hàm bất kỳ > Allow Access. |
| **Tên App không đổi** | Do Cache của Android | File `.bat` đã tự tăng `versionCode`, hãy gỡ App cũ cài lại nếu vẫn bị. |
| **Lỗi Split (Stats)** | Dữ liệu trong Sheet1 bị rác | Xóa các dòng không phải là điểm số (như dòng ghi version) trong tab Sheet1. |
| **Không nhận được Mail** | Mail bị vào hòm thư Spam | Kiểm tra mục Spam và đánh dấu "Not Spam" cho hệ thống. |

---

## 📈 5. Mở rộng (Scaling Up)

Nếu Hân muốn dùng cho **khối lớp khác**:

* Mỗi lớp nên có một **Repository Github riêng** để lấy link `update.zip` riêng biệt.
* Mỗi lớp nên có một **Google Sheet riêng** để quản lý danh sách học sinh không bị lẫn lộn.

---

> **Ghi chú:** Luôn đảm bảo mật khẩu `TontonYuta_Dep_Trai_2026` trong file `.bat` và Script phải khớp nhau để bảo mật hệ thống.

