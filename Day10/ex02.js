function printIsoscelesTriangle(n, character) {
	for (let i = 1; i <= n; i++) {
		let line = "";
		// * for vẽ dấu cách
		for (let k = 0; k < n - i; k++) {
			// console.log(n - i);
			line += " ";
		}

		// * for vẽ dấu *
		for (let j = 0; j < 2 * i - 1; j++) {
			line += character;
			// console.log(line);
		}
		console.log(line);
	}
}

/**
 * * Bước 1: tạo line = ""
 * * Bước 2: vẽ dấu cách
 * * Bước 3: vẽ character
 * * Bước 4: in ra line
 *
 */

// Test
printIsoscelesTriangle(5, "*");
