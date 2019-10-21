function humanReadable(seconds) {
	let h = Math.floor(seconds / 3600);
	let m = Math.floor((seconds % 3600) / 60);
	let s = Math.floor((seconds % 3600) % 60);
	let array = [ h, m, s ];
	let format = array.map(function(value) {
		if (value.toString().length < 2) {
			return '0' + value.toString();
		} else {
			return value;
		}
	});
	return `${format[0]}:${format[1]}:${format[2]}`;
}
