//find the difference of two arrays

function diffArray(arr1, arr2) {
  var newArr = [];

  //filter using includes: items that are not in array2 are added to items not in array1 using concat
  newArr = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
