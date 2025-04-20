const data = [
	{ id: 1, name: "ban phim aula f75", price: 800000 },
	{ id: 2, name: "ban phim aula f99", price: 800000 },
	{ id: 3, name: "chuot magic mouse logitech k70", price: 800000 },
	{ id: 4, name: "chuot fulen f10", price: 800000 },
];

// * tokenize data
// * inverted index

// #codefarm
const invertedIndex = {
	"ban phim": [1, 2],
	chuot: [3, 4],
	aula: [1, 2],
	magic: [3],
	logitech: [3],
	mouse: [3],
	codefarm: [10, 20],
};

// hoc lap trinh javascript tai codefarm -> google đánh indexes -> SEO.
// * search "ban phim logitech" -> hashing ["ban phim", "logitech"]
// * [...invertedIndex["ban phim"], ...invertedIndex["logitech"]] = [1,2,3]
