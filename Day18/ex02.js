// * Biến đổi chuỗi

let schools = "cao dang Fpoly";

// console.log(schools.toUpperCase());
// console.log(schools.toLowerCase());

// console.log(schools);

// * Cắt chuỗi

/**
 * * slice: hỗ trợ chỉ số âm, tạo ra chuỗi con được cắt từ chuỗi ban đầu, nếu không cắt được chuỗi con thì ra chuỗi rỗng.
 * * substring: tương tự như slice nhưng không hỗ trợ chỉ số âm.
 * * split(separator, limit): chuyển chuỗi thành mảng.
 */

console.log(schools.slice(0, -2));

console.log(schools.split(" ", 2));

let content = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem tenetur quod reprehenderit aut que?`;

/**
 * * BT: đếm xem content có bao nhiêu từ (cách nhau 1 dấu cách là 1 từ).
 */

/**
 *
 */

let myStr = "Hoc lap trinh tai CodeFarm cùng thầy Hoàng, thầy Hoàng dạy JS khá ổn";

/**
 * * Biến đổi chuỗi ban đầu thành chuỗi mới với "thầy Hoàng" đổi thành "thầy Đông" và "JS" đổi thành "JavaScript"
 */
