function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line

  arr = collection.filter(function (item) { //filter collection (first argument)
    for (let i in source) { //loop through source argument, search for key
      if (source[i] != item[i]) { //if collection key doesn't match source key, return false (don't add to array), else return true (add to array)
        return false;
      }
    }
    return true;
  });
  console.log(arr) //for testing
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }); //[ { first: 'Tybalt', last: 'Capulet' } ]
