function printMultiplicationTable() {
	let content = "";
	for (let i = 1; i <= 10; i++) {
		for (let j = 1; j <= 10; j++) {
			// console.log({ i, j });
			// console.log(`${i} * ${j} = ${i * j}`);
			content += `${i} * ${j} = ${i * j} <br />`;
		}
		// console.log("----------------");
		content += "<hr />";
	}
	return content;
}

document.write(printMultiplicationTable());
