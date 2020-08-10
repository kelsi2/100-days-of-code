function truncateString(str, num) {
	if (str.length > num) {
		//if string is longer than given number, return characters from index 0 up to number and end with ...
		return str.slice(0, num) + '...';
	} else {
		//if string is shorter than num, return the string
		return str;
	}
}

truncateString('A-tisket a-tasket A green and yellow basket', 8);
