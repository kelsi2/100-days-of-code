function mutation(arr) {
	let target = arr[0].toLowerCase(); //what we are hoping to match (easier to work with matching if all strings are lower case)
	let test = arr[1].toLowerCase(); //string we are testing to see if it matches

	for (let i = 0; i < test.length; i++) {
		//loop over test string
		if (target.indexOf(test[i]) < 0) {
			//if target does not match test character, return false (not a match)
			return false;
		}
	}
	return true; //return true if all characters in test match characters in target string
}

mutation([ 'hello', 'hey' ]);
