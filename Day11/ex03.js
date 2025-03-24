const arr = [1, 2, 5, 7, 9, 66, 88, 99];
/**
 * * Lọc mảng ban đầu ra thành 2 mảng, 1 mảng số chẵn, 1 mảng số lẻ
 */

const oddArr = [];
const evenArr = [];
for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 === 0) {
		evenArr.push(arr[i]);
	} else {
		oddArr.push(arr[i]);
	}
}

console.log(oddArr);
console.log(evenArr);

const arr2 = ["Hoang", "Donal Trump", "", null, undefined, "Dong", "Huy", NaN, 0, 10, true, []];

/**
 * ! BT: Làm sạch các giá trị falsy ở mảng arr2 và đưa vào mảng mởi newArr2
 */

const newArr2 = [];

for (let j = 0; j < arr2.length; j++) {
	if (arr2[j]) {
		newArr2.push(arr2[j]);
	}
}

console.log(newArr2);
