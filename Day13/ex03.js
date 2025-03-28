const obj1 = { name: "Hoang", age: 33 };

Object.freeze(obj1);

// obj1.name = "Huy";

// delete obj1.age;

// console.log(obj1);

const obj2 = { name: "Dong", age: 24 };

Object.seal(obj2);
obj2.name = "Huy";
obj2.age = 100;

delete obj2.age;

console.log(obj2);
