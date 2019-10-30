function iqTest(numbers) {
	numbers = numbers.split(' ').map(function(e) {
		return parseInt(e);
	});
	let odd = numbers.filter(function(e) {
		return e % 2 === 1;
	});
	let even = numbers.filter(function(e) {
		return e % 2 === 0;
	});
	return odd.length < even.length ? numbers.indexOf(odd[0]) + 1 : numbers.indexOf(even[0]) + 1;
}
