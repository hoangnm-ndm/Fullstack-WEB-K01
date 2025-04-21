/**
 * * 1. getElementById() // element/null
 * * 2. getElementsByTagName() // HTMLCollection
 * * 3. getElementsByName()
 * * 4. getElementsByClassName() // HTMLCollection
 * * 5. querySelector() // phần tử html đầu tiên thoả mãn selector
 * * 6. querySelectorAll() // NodeList
 *
 * Live List >< Static List
 */

// console.log(document.getElementById("list-languages"));
// console.log(document.getElementsByTagName("ol")[0]);
// console.log(document.getElementsByClassName("languages")[0]);
// console.log(document.querySelector("ol.languages"));
// console.log(document.querySelectorAll("ol.languages"));

const olElement = document.getElementsByClassName("languages")[0];

console.log(olElement.children);

for (let i = 0; i < olElement.children.length; i++) {
	console.log(olElement.children[i]);
}

console.log(Array.isArray(olElement.children));

console.log(olElement.children);

const olElements = {
	0: "ol dau tien",
	1: "ol tiep theo",
	2: "ol tiep theo",
	3: "ol tiep theo",
	length: 4,
};
