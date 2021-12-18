// Ôn tập lại với Javascript

////// Các kiểu dữ liệu cơ bản trong Javascript (6 kiểu dl)
/*
  - Number: Số;         //1,2,3
  - String: Chuỗi       // "Hi"
  - Boolean: true/false // true || false
  - Object: Đối tượng   // {}
  - null: null          // null
  - undefinded: không xác định // undefinded
*/

//////////// Khai báo biến trong Javascript (biến dùng để lưu trữ giá trị)

// Khai báo biến: let/var/const
let a = 1;
var b = 2;
const Pi = 3.14;


//////////// Toán tử trong Javascript
/*
  Toán tử số học: +, -, *, /
  
  Toán tử so sánh: >, <, >=, <=, ==, ===

  Toán tử gán: = (thay thế giá trị cho biến).
*/

////// VD: toán tử số học: 
let add = 1 + 2;
let divide = 1 / 2;
console.log(divide);


///// VD: toán tử  so sánh:



//////// Câu điều kiện trong Javascript: if - (else if) - else
/*
Kiểm tra toán điểm thí sinh đạt được trong kỳ thi c3 vừa rồi sao cho:
- Lớp chọn: Điểm lớn hơn 8đ
- Lớp khá: Điểm lớn hơn 6,5đ
- Lớp thường: Điểm lớn hơn 5đ
- Lớp bổ trợ: Điểm dưới 5đ
- Điểm bằng 0: Không nhận học sinh.
*/

// khai báo biến điểm 
let diemToan = 7;

if (diemToan > 8) {
  console.log(`Học sinh đủ điều kiện vào lớp chọn`);
}
else if (diemToan > 6.5) {
  console.log(`Học sinh đủ điều kiện vào lớp khá`);
}
else if (diemToan > 5) {
  console.log(`Học sinh đủ điều kiện vào lớp thường`);
}
else if (diemToan == 0) {
  console.log(`Học sinh không đủ điều kiện vào lớp và phải thi lại`);
}
else {
  console.log("Học sinh đủ điều kiện vào lớp bổ trợ");
}


