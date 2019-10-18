function logicalCalc(array, op) {
	switch (op) {
		case 'AND':
			return array.reduce(and);
		case 'OR':
			return array.reduce(or);
		case 'XOR':
			return array.reduce(xor);
	}
}
function and(bool1, bool2) {
	return bool1 && bool2;
}
function or(bool1, bool2) {
	return bool1 || bool2;
}
function xor(bool1, bool2) {
	return bool1 != bool2;
}
