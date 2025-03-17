/**
 * * Khai bao voi Var:
 * - Có thể khai báo lại biến.
 * - Có thể gán lại giá trị cho biến.
 * - var có phạm vi là global
 */

/**
 * ECMAScript 6 (ES6) - 2015
 * * Khai bao voi Let:
 * - Không thể khai báo lại biến.
 * - Có thể gán lại giá trị cho biến.
 * - let có phạm vi là block


 *  * Khai bao voi Const: (constanst)
 * - Không thể khai báo lại biến.
 * - Const không thể gán lại giá trị cho biến (nếu không có phương thức đặc biệt).
 * - const có phạm vi là block (function, if else, for, while, do while, ...)
 */

var a = 10;

// block code
{
	{
		{
			a = 20;
			console.log(a);
		}
	}
}

console.log(a);

{
	let b = "Huy";
}
let b = 10;
b = b + 10;

console.log(b);

const pi = 3.14;
pi = 3.15;
