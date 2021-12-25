Lưu trữ dữ liệu cục bộ - HTML5 LocalStorage

1. Local Storage là gì?

- Hiện nay, mỗi cookie chi cho phép lưu trữ tối đa là 4KB. LocalStorage có công dụng tương tự với cookie nó sẽ lưu trữ thông tin trên browser mà người dùng truy cập.
- Điểm khác biệt là LocalStorage cho phép lưu trữ tới 5MB (1MB -> 1000KB)

- Những trình duyệt hỗ trợ LocalStorage: chrome, edge, firefox, OperaGX

- Có 2 loại Local Storage:

* window.localStorage: Lưu trữ dữ liệu vô thời hạn, dữ liệu sẽ được lưu trữ cho tới khi người clear history.
* window.sessionStorage: Lưu trữ dữ liệu cho một phiên làm việc, có nghĩa dữ liệu sẽ bị mất khi người dùng tắt browser

- Mẹo: Để kiểm tra xem trình duyệt có hỗ trợ Local Storage không bằng cách:

if (typeof (Storage) !== 'undefined') {
alert("yes, this browser have it")
}
else {
alert("no, it isn't");
}
