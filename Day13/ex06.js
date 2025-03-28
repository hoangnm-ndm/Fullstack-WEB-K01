function Book(title, author, year) {
	this.title = title;
	this.author = author;
	this.year = year;
}

// Phương thức tĩnh

Book.showBook = function (book) {
	console.log(`Ten sach la: ${book.title}`);
};

const obj1 = new Book("Hoc lap trinh khong kho", "Hoang", 2021);

const obj2 = {
	title: "Ten cuon sach",
};

Book.showBook(obj1); // Ten sach la: Hoc lap trinh khong kho

Book.showBook(obj2); // Ten sach la: Ten cuon sach
