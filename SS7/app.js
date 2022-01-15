// 5p: Search ES6 là gì?

//// ES6: là ECMA Script 6: Phát hành 2015.

/*
1. Hằng số
2. Các biến và các hàm có phạm vi khối
3. Arrow Function (hàm mũi tên)
4. Các tham số mặc định
5. Các tham số còn lại
6. String templating
7. Thuộc tính đối tượng
8. Cú pháp xác định lớp chính thức (Lập trình hướng đối tượng).
*/

// 1. Hằng số: const (ES6): Hằng số là các giá trị chỉ có thể xác định 1 lần duy nhất. (được gán 1 lần duy nhất)
const Pi = 3.14;
// Pi = "Đây là chuỗi được gán"; // Không được khai báo hằng số.
// Khả thi hay không?

// 2. Các biến và các hàm có phạm vi khối: var/let/
// VD:
{
  let x = "hello";
  {
    let x = "world";
    console.log("inner block, x = " + x); // world: 

    var y = "Hello world";
  }
  console.log("outer block, x = " + x); // hello

  console.log(y); //
}



// In ra gì