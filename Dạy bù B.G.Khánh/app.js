// Ngôn ngữ lập trình:
/*
Kiểu dữ liệu cơ bản trong JS: 6 kiểu
1. String: Chuỗi: "hi", 'hi', `hi`
2. Number: Số: 1,2,3,4
3. Boolean: true/false
4. null: giá trị Rỗng
5. undefined: Không xác định: mới khai báo biến.
6. Object: Đối tượng: 

Toán tử trong Javascript:
1. Toán tử số học: +,-,*,/, %,...
2. Toán tử logic: <,>,==, ===, >=,<=,!=, !== => true/false
3. Toán tử gán: = 

Mảng (danh sách)
*/

/*
Nhà hàng đang cần lưu trữ lại thực đơn món ăn dưới dạng danh sách
1. Có thể thêm món ăn vào ds đó
2. Có thể cập nhật lại món ăn vào ds đó: 
3. Có thể Xóa món ăn đó đi nếu không sản xuất nữa.
*/

let menu = ['thit cho', 'com', 'canh', 'chan ga'];

let input;
do {
  input = prompt("Mời người dùng nhập C,R,U,D tương ứng là Create, Read, Update, Delete")
    .trim()
    .toLowerCase();

}
while (input != "c" && input != "r" && input != "u" && input != "d" && input != "o");

if (input === 'c') {
  menu.push(
    prompt('Mời người dùng nhập vào tên món ăn mới').trim().toLowerCase()
  );
}
else if (input === 'r') {

  alert(menu);
}
else if (input === "u") {
  let tenMonUpdate = prompt("Mời người dùng nhập tên món muốn update").trim().toLowerCase()
  let viTriMonUpdate = menu.indexOf(tenMonUpdate); // vị trí thứ 1 trong mảng
  menu[viTriMonUpdate] = prompt("Mời người dùng nhập tên mới mới để update");

}