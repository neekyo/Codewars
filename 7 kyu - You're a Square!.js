var isSquare = function(n) {
	if (n < 0) {
		return false;
	}

	let x = Math.sqrt(n);

	if (Number.isInteger(x)) {
		return true;
	} else return false;
};
