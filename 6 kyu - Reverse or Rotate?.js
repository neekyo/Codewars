function revrot(str, sz) {
	if (sz < 1 || sz > str.length) return '';

	let reverse = (s) => s.split('').reverse().join('');
	let rotate = (s) => s.slice(1) + s.slice(0, 1);
	let sum_cubes = (c) => c.split('').reduce((a, b) => a + Math.pow(b, 2), 0);

	return str.match(new RegExp('.{' + sz + '}', 'g')).map((c) => (sum_cubes(c) % 2 ? rotate(c) : reverse(c))).join('');
}
