// Day 1: Functions

function vowelsAndConsonants(s) {
    let vowels = [];
    let consonants = [];
  
    for (let i = 0; i < s.length; i++) {
        let letter = s[i].toLowerCase();
        if ("aeiou".includes(letter)) {
            vowels.push(s[i]); // Store vowels
        } else if (letter >= "a" && letter <= "z") {
            consonants.push(s[i]); // Store consonants
        }
    }
  
    
    vowels.forEach(vowel => console.log(vowel));
  
  
    consonants.forEach(consonant => console.log(consonant));
}

let Name ='shanto ahamed ';


for (let i = 0; i < Name.length; i++) {
    console.log(Name[i]);
}


