//find the sum of all numbers in a range

function sumAll(arr) {
  let newArr = []; //hold numbers in range from arr[0] to arr[1] in array
  let sum = 0; //sum of all numbers from newArr

  const reducer = (accumulator, currentValue) => accumulator + currentValue; //reduce method uses this function to sum numbers from newArr

  arr.sort(function (a, b) {
    return a - b
  }); //sort original array so smallest number is first

  for (let i = arr[0]; i <= arr[1]; i++) { //loop from arr[0] to arr[1] and push all values to newArr
    newArr.push(i);
  };

  sum = newArr.reduce(reducer); //sum all numbers in newArr using reducer function

  return sum;
}

sumAll([1, 4]);
