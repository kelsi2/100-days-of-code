function titleCase(str) {
	let newArray = str.toLowerCase().split(' '); //change string to lower case and split, add to array to make mutable

	let finalString = newArray.map(function(value) {
		//map array (create new array with title case)
		return value.replace(value.charAt(0), value.charAt(0).toUpperCase());
	});
	return finalString.join(' '); //return string using join
}

titleCase("I'm a little tea pot");
