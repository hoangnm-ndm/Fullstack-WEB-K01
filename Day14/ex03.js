/**
 * * Viết hàm `elevatorLoad()` nhập vào mảng người đứng trong thang máy, tính ra tổng tải trọng và báo true hoặc false để đảm bảo an toàn cho thang máy biết thang máy chỉ chịu được tải trọng <= 750kg
 */

const people = [
	{ name: "hoang", weight: 60 },
	{ name: "pháo", weight: 50 },
	{ name: "trump", weight: 120 },
	{ name: "obama", weight: 60 },
	{ name: "ViruSs", weight: 50 },
	{ name: "1 bao tải gạo", weight: 400 },
];

function elevatorLoad(...people) {
	let totalWeight = 0;
	for (let i = 0; i < people.length; i++) {
		totalWeight += people[i].weight;
	}
	console.log(totalWeight);
	return totalWeight <= 750;
}

console.log(elevatorLoad(...people));
