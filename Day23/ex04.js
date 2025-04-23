const h1Element = document.getElementsByTagName("h1")[0];

console.log(h1Element.className);
// h1Element.className = "newClass";
// console.log(h1Element.className);

console.log(h1Element.className.split(" "));
console.log(h1Element.classList); // ?iterable

h1Element.classList.replace("title-1", "title-01");

console.log(h1Element.classList);

// world wide web consortium

/**
 * contains
 * add
 * remove
 * toogle
 * replace
 * keys
 * entries
 * values
 */
