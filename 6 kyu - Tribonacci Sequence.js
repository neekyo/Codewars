function tribonacci(signature, n) {
	var tri = [];
	(tri[0] = signature[0]), (tri[1] = signature[1]), (tri[2] = signature[2]);
	for (var i = 3; i < n; i++) {
		tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
	}
	return n < 3 ? signature.slice(0, n) : tri;
}
