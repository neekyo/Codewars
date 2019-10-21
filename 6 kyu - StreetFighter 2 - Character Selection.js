function streetFighterSelection(fighters, position, moves) {
	let result = [];
	let vert = position[0];
	let hor = position[1];

	moves.forEach((mov) => {
		switch (mov) {
			case 'up':
				vert--;
				if (vert < 0) {
					vert = 0;
				}
				break;
			case 'down':
				vert++;
				if (vert > fighters.length - 1) {
					vert = fighters.length - 1;
				}
				break;
			case 'left':
				hor--;
				if (hor < 0) {
					hor = fighters[vert].length - 1;
				}
				break;
			case 'right':
				hor++;
				if (hor > fighters[vert].length - 1) {
					hor = 0;
				}
				break;
		}
		result.push(fighters[vert][hor]);
	});
	return result;
}
