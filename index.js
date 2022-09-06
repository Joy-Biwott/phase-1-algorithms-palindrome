function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase();
  for(let i=0; i<word.length; i++){
    if (word[i] !== word[word.length -1 -i]){
      return false;
    } else {
      return true;
    }
  }
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  the function isPalindrome first converts the word to lower case
  it then gives a condition such that if the first part of the word deeply equals the corresponding last part,
  it returns true, else it returns false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
