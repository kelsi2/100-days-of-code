function frankenSplice(arr1, arr2, n) {
	let arr2Copy = arr2.slice(); //create copy of array 2

	for (let i = 0; i < arr1.length; i++) {
		//loop over array 1
		arr2Copy.splice(n, 0, arr1[i]); //start changing the array at index n, delete nothing, add all elements from array 1
		n++; //increment n
	}
	return arr2Copy;
}

frankenSplice([ 1, 2, 3 ], [ 4, 5, 6 ], 1);
