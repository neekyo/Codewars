function beggars(values, n) {
	if (n === 0) {
		return [];
	}
	const beg = new Array(n);
	for (let i = 0; i < n; i++) {
		beg[i] = 0;
	}
	for (let i = 0; i < values.length; i++) {
		beg[i % n] += values[i];
	}
	return beg;
}
