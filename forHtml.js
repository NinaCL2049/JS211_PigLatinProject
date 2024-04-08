'use strict';






const pigLatin = (word) => {
  let result = word.toLowerCase();
  let theString = result.trim();
  const vowelFind = /[aeiou]/i;
  const firstVowelIndex = theString.search(vowelFind);

  if (firstVowelIndex === 0) {
    result = theString + "yay"

  } else if (firstVowelIndex === 1) {
    result = theString.slice(1) + theString.charAt(0) + "ay"

  }

  else {
    result = theString.slice(2) + theString.charAt(0) + theString.charAt(1) + "ay"
  }

  return result;



  // Your code here

}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C

const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

const runPigLatinOn = () => {
  let userWord = document.getElementById("userInput").value;
  let pigLatinResult = pigLatin(userWord);
  document.getElementById("answer").innerHTML = pigLatinResult;

}
// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.