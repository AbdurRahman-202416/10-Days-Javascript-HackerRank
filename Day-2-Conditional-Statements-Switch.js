
function getLetter(s) {
  let letter;
  // Write your code here

  switch (true) {
    case "aeiou".includes(s[0]):
      letter = "A";
      break;
    case "bcdfg".includes(s[0]):
      letter = "B";
      break;
    case "hjklm".includes(s[0]):
      letter = "C";
      break;
    default:
      letter = "D";
  }

  console.log(letter);
  return letter;
}

getLetter('hello');
     


//some eaxmple for testing >>>>>>>>>>


// function getLetter(s) {
//     let letter;
//     let firstChar= s.charAt(0);

//     // console.log(firstChar);
//     // Write your code here
//         let a = s.includes(firstChar);
//         console.log(a);

//         switch (s.includes(firstChar)) {
//             case 'a':
//               console.log(1)
//               break;

//             case 'Welcome':
//             case 'Wel':
//             case 'come':
//               console.log(2)
//               break;

//             case 'Wel':
//               console.log(3)
//               break;

//             default:
//               break;
//           }

//     // return letter;
// }
// getLetter('hello');
