function tripledouble(num1, num2) {
	var foundTripleDouble = false;
	num1 = num1.toString();
	num2 = num2.toString();

	for (var j = 0; j < num1.length; j++) {
		let digit = num1[j];
		for (var i = 0; i <= num1.length - 2; i++) {
			if (num1.charAt(i) === digit && num1.charAt(i + 1) === digit && num1.charAt(i + 2) === digit) {
				for (var k = 0; k < num2.length - 1; k++) {
					if (num2.charAt(k) === digit && num2.charAt(k + 1) === digit) {
						return 1;
					}
				}
			}
		}
	}
	return 0;
}
