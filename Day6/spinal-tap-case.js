//change string to spinaltap case

function spinalCase(str) {
  let reg = /\s+|_+/g //find all white space and underscores using regex

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2") //find all capital letters and add a space between them

  return str.replace(reg, "-").toLowerCase(); //replace spaces and underscores with hyphens and changes all characters to lower case
}


spinalCase('This Is Spinal Tap'); //this-is-spinal-tap
