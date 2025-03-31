const obj1 = {
	name: "hoang",
	infor: {
		sex: "male",
		age: 33,
		major: undefined,
	},
	// sayHello: function () {
	// 	console.log("hello");
	// },
};

const obj3 = structuredClone(obj1);

console.log(JSON.stringify(obj1));
const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.infor.sex = "LGBT";
console.log(obj2);

console.log(obj3);
/**
 * Copy bằng JSON.stringify(JSON.parse) mất phương thức và các giá trị đặc biệt như undefined,...
 */
