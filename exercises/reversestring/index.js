// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //   return str
  //     .split('') // turns into array
  //     .reverse() // reverses the array
  //     .join(''); // turns back into a string
  let reversed = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  for (let char of str) {
    reversed = char + reversed; // adds each char to the beginning of reversed string
  }
  return reversed;
}

module.exports = reverse;
