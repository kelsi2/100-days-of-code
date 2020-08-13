//matching case, find words in a string and replace them with a new word

function myReplace(str, before, after) {
  //if the first letter is capitalized, change the first letter of after to upper case to match. Do the same for lower case.
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.slice(1);
  } else if (before[0] === before[0].toLowerCase()) {
    after = after[0].toLowerCase() + after.slice(1);
  }
  //using the correct case as above, replace before with after in string
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
//"A quick brown fox leaped over the lazy dog"