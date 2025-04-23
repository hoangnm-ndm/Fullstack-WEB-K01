/**
 * classList
 * attribute
 * textNode
 * event
 * form
 */

let h1Element = document.getElementsByTagName("h1")[0];

console.log({ h1Element });

h1Element.title = "Noi dung chinh cua tieu de";

const aElement = document.getElementsByTagName("a")[0];
aElement.href = "https://google.com";

// * getter, setter
// * getAttribute(), setAttribute()

aElement.setAttribute("aaaa", "hello"); // attribute customize
aElement.bbb = "Xin chao"; // sai
console.log(aElement);
console.log(aElement.getAttribute("aaaa"));
