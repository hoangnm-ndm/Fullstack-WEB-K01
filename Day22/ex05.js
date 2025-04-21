/**
 * Attribute:
 */

const h2Element = document.getElementsByTagName("h2")[0];

console.log(h2Element.style);

// h2Element.style.backgroundColor = "red";
// h2Element.style.color = "green";

console.log(Object.values(h2Element.style).length);
console.log(h2Element.style);

h2Element.style.cssText = /*css */ `
padding: 12px;
margin: 30px;
border-radius: 8px;
background-color: red;
`;

// * kebab-case
