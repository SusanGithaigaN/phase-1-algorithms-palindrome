  // Declare a function isPalindrome and pass the parameter word
  function isPalindrome(word) {
    // Create a new variable split it, assign it to the reverse of our word parameter then join the reversed string.
    let myWordStringReversed = word.split('').reverse().join('');
    return word === myWordStringReversed;
  }

  /* 
    Pseudocode.
    function isPalindrome(word)
    declare a variable myWordStringReversed
    let myString ==word.split(),
    word.reverse(),
    word.join();
    return myWordStringReversed;
  */

  /*
    Declare a variable, assign it to the result of: split a string, reverse the string, put it back together
    compare it with the original string and output true or false.
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