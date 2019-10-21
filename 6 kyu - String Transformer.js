function stringTransformer(str) {
	const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	return str
		.split('')
		.map((i) => (upperCase.indexOf(i) === -1 ? i.toUpperCase() : i.toLowerCase()))
		.join('')
		.split(' ')
		.reverse()
		.join(' ');
}
