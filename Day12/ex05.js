const obj1 = { name: "Thang" };
const obj2 = obj1;
const obj3 = { name: "Thang" };

console.log(obj2 === obj1); // * true
// obj2 -> x0xf01
// obj1 -> x0xf01
console.log(obj3 === obj1); // * false / true

console.log((obj3.name = "Hoang"));

console.log(obj1);
console.log(obj3);
