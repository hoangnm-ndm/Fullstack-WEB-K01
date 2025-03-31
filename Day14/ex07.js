Array.prototype.flat2 = function flat(depth = 1) {
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		if (Array.isArray(this[i]) && depth > 0) {
			newArr.push(...this[i].flat2(depth - 1));
		} else {
			this[i] && newArr.push(this[i]);
		}
	}
	return newArr;
};

const arr3 = [1, [2, 3, , , [4, [, , , , 6, 7]]]];

console.log(arr3.flat2(4));
