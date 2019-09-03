function XO(str) {
	let sum = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i].toLowerCase() == 'o') sum--;
		if (str[i].toLowerCase() == 'x') sum++;
	}
	return sum == 0;
}
