const digPow = (n, p) => {
	let sum = 0;
	let arr = n.toString().split('').map((elem) => parseInt(elem, 10));

	for (let i = p, j = 0; i < p + arr.length; i++, j++) {
		let num = Math.pow(arr[j], i);
		sum += num;
	}

	var k = sum / n;

	if (!(k % 1)) {
		return k;
	} else {
		return -1;
	}
};
