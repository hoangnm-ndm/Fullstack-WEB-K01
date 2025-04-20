highlightKeyword(
	"Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!, JAVASCRIPT",
	"javascript"
);

// Output:
// "Học <strong>JavaScript</strong> không khó, Học <strong>javascript</strong> khó đã có CodeFarm lo, CodeFarm - Học là có việc!"

function highlightKeyword(text, keyword) {
	const regex = new RegExp(`(${keyword})`, "gi");
	return text.replace(regex, "<strong>$1</strong>");
}

const result = highlightKeyword(
	"Học JavaScript không khó, Học javascript khó đã có CodeFarm lo, CodeFarm - Học là có việc!, JAVASCRIPT",
	"javascript"
);

document.write(result);

// $search
