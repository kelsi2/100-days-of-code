function translatePigLatin(str) {
  //use regex to identify vowels
  let vowels = ["a", "e", "i", "o", "u"];
  //index to store the first vowel in the word
  let vowelIndex = 0;

//if string starts with a vowel, just add "way" to the end of the string
  if (vowels.includes(str[0])) {
     return str + "way"
   } else {
      for (let char of str) { 
        //loop until first vowel if found
        if (vowels.includes(char)) { 
        //store index of first vowel
          vowelIndex = str.indexOf(char);
          break;
        }
      }
      //extract from first vowel to end of string, put that in front of everything up to the first vowel, then add "ay" to the end
      return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
   }
}

translatePigLatin("consonant");
