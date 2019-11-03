// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2) -- 3 spaces
//       ' # '
//       '###'
//   pyramid(3) -- 5 spaces
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4) -- 7 spaces
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n) {
  let columns = 0;
  if (n == 1) {
    columns = 1;
  } else {
    columns = n + (n - 1);
  }

  let mid_point = parseInt(columns / 2);

  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < columns; column++) {  
      if (column == mid_point) { // to simplify the if and else if's: (mid_point - row <= column && mid_point >= column)
        stair += '#';
      } else if (column == mid_point - row || column == mid_point + row) {
        stair += '#';
      } else if (column > mid_point - row && column < mid_point + row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

module.exports = pyramid;
