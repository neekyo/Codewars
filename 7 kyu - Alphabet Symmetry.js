function solve(arr) {
	const letters = 'abcdefghijklmnopqrstuvwxyz';
	let wordArray = [];

	for (let i = 0; i < arr.length; i++) {
		let counter = 0;
		let word = arr[i].toLowerCase();
		for (let j = 0; j < word.length; j++) {
			let char = word[j];
			if (j === letters.indexOf(char)) {
				counter += 1;
			}
		}
		wordArray.push(counter);
	}

	return wordArray;
}
