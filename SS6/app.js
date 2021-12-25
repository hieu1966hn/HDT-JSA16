// Kiểm tra browser có hỗ trợ LocalStorage không

// if (typeof (Storage) !== 'undefined') {
//   alert("yes, this browser have it")
// }
// else {
//   alert("no, it isn't");
// }


////// Khởi tạo localStorage
// C1: 
localStorage.setItem("key", "Ổ khóa nhé");
// C2: 
localStorage.test = "Lưu trữ thành công với cách 2"
//       test: key,  value: ,..... chuỗi bên trên.


// VD: từ khóa NTH: giá trị đi kèm là: Teacher of HDT-JSA16
localStorage.NTH = "Teacher of HDT-JSA16"


////// Sử dụng Local Storage
// C1:
localStorage.getItem("NTH");
console.log(localStorage.getItem("NTH"));// 
