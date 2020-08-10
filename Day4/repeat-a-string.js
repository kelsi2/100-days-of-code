function repeatStringNumTimes(str, num) {
	if (num < 1) {
		//if num is negative return empty string
		return '';
	} else if (num === 1) {
		//no repetition if num is 1
		return str;
	} else {
		return str + repeatStringNumTimes(str, num - 1); //using recursion if num is greater than 1: run function until num reaches 1
	}
}

repeatStringNumTimes('abc', 3);
