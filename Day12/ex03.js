const myInfor = {
	name: "Hoang",
	email: "thayhoangjs@gmail.com",
	position: "Chủ tịch",
};

/**
 * In ra từng cặp key-value của object trên với vòng lặp.
 *
 * name-Hoang
 * email-thayhoangjs@gmail.com
 * position-chủ tịch
 */

for (key in myInfor) {
	console.log(`${key}-${myInfor[key]}`);
}

/**
 *  ! Computed property
 */
