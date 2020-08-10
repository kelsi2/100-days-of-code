function chunkArrayInGroups(arr, size) {
	let arr2 = []; //new array to hold sliced values

	for (let i = 0; i < arr.length; i += size) {
		//loop increments size stopping at arr.length
		//loop doesn't loop through arr, only generates indices to slice array in the correct places (size)
		arr2.push(arr.slice(i, i + size)); //push sliced items to arr2 up to size.length
	}
	return arr2;
}

chunkArrayInGroups([ 'a', 'b', 'c', 'd' ], 2);
