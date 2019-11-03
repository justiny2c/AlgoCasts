// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  //   let lower_case = str.toLowerCase();
  //   let count = 0;
  //   const check_vowels = 'aeiou';

  //   for (let char of lower_case) {
  //     if (check_vowels.includes(char)) {
  //       count += 1;
  //     }
  //   }
  //   return count;

  const matches = str.match(/[aeiou]/gi); //reg.ex expression
  return matches ? matches.length : 0;
}

// let str = 'Hello World!';
// console.log(vowels(str));

module.exports = vowels;
