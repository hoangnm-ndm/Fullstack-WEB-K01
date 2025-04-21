// * DOM = Document Object Model (Mô hình tài liệu dạng đối tượng)

console.log(typeof document);

const myDocument = {
	doctype: "<!DOCTYPE html >",
	html: {
		head: {
			title: "Hoc lap trinh tai CodeFarm",
		},
		body: {
			h1: "Hoc ve DOM",
		},
	},
};

// * html là root element
console.log(myDocument);

/**
 * * Thao tác với element node (các thẻ html)
 * * Thao tác với attribute node
 * * Thao tác với text node
 */
