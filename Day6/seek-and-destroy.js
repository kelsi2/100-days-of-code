//remove elements from an array that match given arguments

function destroyer(arr) {
  let args = [].slice.call(arguments) //turn arguments into an array so indexes can be referenced

  for (let i = 0; i < arr.length; i++) { //loop through array (args[0])
    for (let j = 0; j < args.length; j++) { //loop through args
      if (arr[i] === args[j]) { //if arr[i] is the same as args[j], remove one element from arr than go back one index in the array (since one has been removed this prevents the loop from skipping indexes)
        arr.splice(i, 1);
        i--;
      }
    }
  }
  console.log(arr) //for testing
  return arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); //[1, 1]
