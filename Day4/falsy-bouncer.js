function bouncer(arr) {
	let truthy = []; //create a new array of only truthy values
	for (let i = 0; i < arr.length; i++) {
		//loop over given array
		if (arr[i]) {
			//if [i] is truthy, push to truthy array (this will remove any values that are falsey)
			truthy.push(arr[i]);
		}
	}
	return truthy;
}

bouncer([ 7, 'ate', '', false, 9 ]);
