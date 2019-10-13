function isIsogram(str) {
	str = str.toLowerCase();
	let container = [];
	for (let i = 0; i < str.length; i++) {
		if (container.includes(str[i])) {
			return false;
		} else {
			container.push(str[i]);
		}
	}

	return true;
}
