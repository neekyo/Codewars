function countSmileys(arr) {
	let smileys = [ ':)', ';)', ':-)', ';-)', ';~)', ':~)', ':D', ';D', ':-D', ':~D', ';-D', ';~D' ];
	let count = 0;

	for (i = 0; i < arr.length; i++) {
		for (var j = 0; j < smileys.length; j++) {
			if (arr[i] === smileys[j]) {
				count++;
			}
		}
	}
	return count;
}
