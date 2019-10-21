function persistence(num) {
	let digits = num.toString();
	let counter = 0;

	while (digits.length > 1) {
		counter++;
		digits = digits.split('').map(Number).reduce((a, b) => a * b).toString();
	}
	return counter;
}
