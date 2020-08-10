function findElement(arr, func) {
	let num = 0;

	for (let i = 0; i < arr.length; i++) {
		//loop through array
		num = arr[i]; //num equals array at index[i]
		if (func(num)) {
			//if num passes the test in the function (true), return num
			return num;
		}
	}
	return undefined; //if no num in array passes the function test (false), return undefined
}

findElement([ 1, 2, 3, 4 ], (num) => num % 2 === 0);
