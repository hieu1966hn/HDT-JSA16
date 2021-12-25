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
// let diemToan = 2;

// if (diemToan > 8) {
//   console.log(`Học sinh đủ điều kiện vào lớp chọn`);
// }
// else if (diemToan > 6.5) {
//   console.log(`Học sinh đủ điều kiện vào lớp khá`);
// }
// else if (diemToan > 5) {
//   console.log(`Học sinh đủ điều kiện vào lớp thường`);
// }
// else if (diemToan == 0) {
//   console.log(`Học sinh không đủ điều kiện vào lớp và phải thi lại`);
// }
// else {
//   console.log("Học sinh đủ điều kiện vào lớp bổ trợ");
// }



/////// Vòng lặp trong Javascript: while, do - while, for.
/*
in ra các số từ 0-> 10
*/

//// while
// let i = 0;

// logic: kiểm tra đk  (đúng)-> chạy code bên trong -> về lại kiểm tra đk
// Lưu ý: khi nào kiểm tra đk (sai) => thoát khỏi vòng lặp
// Điều kiện dừng: dùng để dừng vòng lặp.
// while (i <= 10) {

//   console.log(i); //0,1,2,...10
//   i = i + 1;
// }



// do - while
// let i = 0;
// do {
//   console.log(i); //0,1,2,...10
//   i = i + 1;
// }
// while (i <= 10);


//// for()
// C1: viết giống while
// let i = 0;
// for (; i <= 10;) {
//   console.log(i);
//   i = i + 1
// }

// C2: Viết gọn hơn while và cho mình có thể biết trước số lần lặp lại
/*
- box1: truyền biến vào
- box2: Điều kiện dừng
- box3: câu lệnh thực hiện sau khi kết thúc vòng lặp
*/
// let i;
// for (i = 0; i <= 10; i = i + 1) {
//   console.log(i); //0,1
// }


//////////// khái niệm mảng: lưu trữ mọi kiểu dữ liệu dưới dạng danh sách
// khai báo mảng: 
let arr = [];
// Kiểm tra xem kiểu dữ liệu có phải mảng hay không ta sử dụng: typeof
// console.log(typeof (arr)); //object: Không sử dụng cách này để kiểm tra mảng
console.log(
  Array.isArray(arr) // true: => mảng || false: => không phải mảng
);

// Khai báo mảng (danh sách) animals có 3 phần tử:
let animals = ["dog", "cat", "fish"];
console.log(animals);

////// Phương thức thao tác với mảng: CRUD (Creat, Read, Update, Delete )
//// C: Create: thêm phần tử vào cuối mảng: push
// thêm phần tử: "snake" vào cuois mảng và in ra:
animals.push('snake');
console.log('Mảng sau khi thêm Snake vào cuối mảng là: ' + animals);

//// Read: Đọc mảng
console.log(animals);

//// U: Update: Sửa thành phần trong mảng (biết vị trí phần tử muốn sửa)
animals[0] = 'chicken';
console.log('Mảng sau khi sửa chicken vào phần tử đầu tiên là: ' + animals);

//// D: Delete: Xóa thành phần trong mảng: (biết vị trí muốn xóa ở đâu); Sử dụng splice để xóa
/*
- box1: Chọn vị trí trong mảng
- box2: Xóa mấy phần tử từ vị trí đã chọn đó
- box3: thêm mấy phần vào vị trí đã chọn
*/

// xóa phần tử cat trong mảng
animals.splice(1, 1);
console.log('Mảng sau khi xóa Cat là: ' + animals);


// bài toán đặt ra: Làm thế nào để các em tìm được vị trí phần tử trong mảng;
// Sử dụng array.indexOf(...) để tìm kiếm và trả về vị trí của mảng:
let snakeIndexInAnimals = animals.indexOf('snake')
console.log("Vị trí của snake trong mảng là: " + snakeIndexInAnimals);


///////// Yêu cầu xóa phần tử "snake" và thay thế bằng "anaconda"
//C1: dùng phép gán
// animals[snakeIndexInAnimals] = 'anaconda'


// C2: Dùng splice
animals.splice(snakeIndexInAnimals, 1, "anaconda")
console.log('Mảng sau khi xóa Snake và đổi thành Anaconda là: ' + animals);

