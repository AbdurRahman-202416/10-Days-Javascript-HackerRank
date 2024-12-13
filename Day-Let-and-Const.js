
// function re(s) {
//     let vowels = "aeiouAEIOU"; 
//     let firstChar = s[0];      
//     let lastChar = s[s.length - 1]; 

  
//     if (vowels.includes(firstChar) && firstChar == lastChar) {
//        console.log(true);
//     } else {
//        console.log(false);
//     }
// }

// re('bab');

function re(s) {
    // RegExp to match strings that start and end with the same vowel
    let regex = /^([aeiouAEIOU]).*\1$/;

    // Test the string 's' against the regular expression
    if (regex.test(s)) {
        console.log(true);
    } else {
        console.log(false);
    }
}


re('abw');  


