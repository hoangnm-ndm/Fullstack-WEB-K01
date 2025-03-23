let weight = parseFloat(prompt("Moi nhap can nang?"));
let height = parseFloat(prompt("Moi nhap chieu cao?"));

function calcBMI(w, h) {
	// ! validation nếu cần
	let BMI = w / h ** 2;
	BMI = +BMI.toFixed(2);

	// if (BMI < 18.5) {
	// 	console.log(`BMI = ${BMI}, Thiếu cân`);
	// } else if (BMI >= 18.5 && BMI < 23) {
	// 	console.log(`BMI = ${BMI}, Bình thường`);
	// } else if (BMI >= 23 && BMI < 25) {
	// 	console.log(`BMI = ${BMI}, Thừa cân`);
	// } else {
	// 	console.log(`BMI = ${BMI}, Béo phì`);
	// }

	// ! Viết bằng switch case
	// switch (10/2 == 5) {
	//   case true:
	//     console.log("10 chia 2 bang 5")
	//     break
	//   case fasle:
	//     console.log("10 chia 2 khong bang 5");
	//     break
	//   default:
	//     console.log("khong biet")
	// }

	// switch (true) {
	// 	case BMI < 18.5:
	// }
}

calcBMI(weight, height);
