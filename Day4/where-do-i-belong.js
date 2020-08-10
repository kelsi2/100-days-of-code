function getIndexToIns(arr, num) {
	arr.sort(function(a, b) {
		//sort array lowest to highest
		return a - b;
	});

	for (let i = 0; i < arr.length; i++) {
		//loop over array starting from smallest number
		if (arr[i] >= num) {
			//if i is larger than num, i is returned
			return i;
		}
	}

	return arr.length; //returns array with num included
}

getIndexToIns([ 40, 60 ], 50);
