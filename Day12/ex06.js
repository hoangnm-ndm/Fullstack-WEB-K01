function first() {
	console.log("First function");
	second();
}

function second() {
	console.log("Second function");
	third();
}

function third() {
	console.log("Third function");
}

first();
