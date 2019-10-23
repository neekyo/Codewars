function accum(s) {
	let accArray = [];
	for (i = 0; i < s.length; i++) {
		accArray.push(s.charAt(i).toUpperCase() + s.charAt(i).toLowerCase().repeat(i));
	}
	return accArray.join('-');
}

('Alternative Solution');
function accum(s) {
	let letters = s.toLowerCase().split('');
	for (i = 0; i < letters.length; i++) {
		letters[i] = letters[i].toUpperCase() + letters[i].repeat(i);
	}
	return letters.join('-');
}
