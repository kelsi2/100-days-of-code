function confirmEnding(str, target) {
	//use substring method to return characters starting at the end of the string (-target.length)
	if (str.substr(-target.length) === target) {
		return true;
	} else {
		return false;
	}
}

confirmEnding('Bastian', 'n');
