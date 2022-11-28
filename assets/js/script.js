// variable is now connected to the button in HTML
var generateBtn = document.querySelector("#generate");

// global variables
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X', 'Z'];
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '_', ':', '?', '>', '<', '.', '/', '-'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];



function generatePassword() {

  // store possible characters as the user selects criteria
  var possibleChar = [];
  // store at least one of each criteria the user selects
  var guaranteedChar = [];
  // store the generated password
  var newPassword = "";
  // to subtract the length of the guaranteed characters already in the array before adding more to complete the password length
  var charTypes = 0;

  // user chooses which criterias to include and add to possible characters if true
  function passCriteria() {
    var hasLowCase = confirm("Should it include lower case letters?");
    if (hasLowCase) {
      //if true, add lower case array to possible characters array
      possibleChar = possibleChar.concat(lowCase);
      // to check
      console.log("Lower case: " + hasLowCase);
      // add a random lower case to the guaranteed characters array
      guaranteedChar.push(lowCase[Math.floor(Math.random() * lowCase.length)]);
      // to check
      console.log(guaranteedChar);
      // increase the number in character types by one because there is another character in the guaranteed characters array
      charTypes++;
      // to check
      console.log(charTypes);
    }
    var hasUpCase = confirm("How about some upper case letters?");
    if (hasUpCase) {
      possibleChar = possibleChar.concat(upCase);
      console.log("Upper case: " + hasUpCase);
      guaranteedChar.push(upCase[Math.floor(Math.random() * upCase.length)]);
      console.log(guaranteedChar);
      charTypes++;
      console.log(charTypes);
    }
    var hasSpecChar = confirm("And maybe some special characters?");
    if (hasSpecChar) {
      possibleChar = possibleChar.concat(specChar);
      console.log("Special characters: " + hasSpecChar);
      guaranteedChar.push(specChar[Math.floor(Math.random() * specChar.length)]);
      console.log(guaranteedChar);
      charTypes++;
      console.log(charTypes);
    }
    var hasNum = confirm("What's missing? \nNumbers! \nYou want some numbers in there?");
    if (hasNum) {
      possibleChar = possibleChar.concat(numbers);
      console.log("Numbers: " + hasNum);
      guaranteedChar.push(numbers[Math.floor(Math.random() * numbers.length)]);
      console.log(guaranteedChar);
      charTypes++;
      console.log(charTypes);
    }
    // passCriteria() = possibleChar
    return possibleChar;
  }

  passCriteria();

  // if user doesn't choose at least one criteria, restart
  if (possibleChar.length < 1) {
    alert("You can't have a password with nothing in it... \nTry again, but this time, say 'ok' to at least one of them please.");
    writePassword();
  }
  else {
    var passLength = prompt("How long should your password be? Please write a numbers.")
    // if the user cancels the prompt, alert
    if (passLength === null || passLength === "") {
      alert("If you don't want to generate a password, \nwhy are you here???");
      writePassword()
    }
    // if the number is less than 8 or greater than 128, alert and reset
    else if ((passLength < 8) || (passLength > 128)) {
      alert("Please type in a number between 8 and 128.");
      writePassword();
    }
    // if number is between 8-128, generate password
    else if ((passLength >= 8) && (passLength <= 128)) {
      console.log(passLength);

      //randomize and make a password
      for (var i = 0; i < (passLength - charTypes); i++) {
        guaranteedChar.push(possibleChar[Math.floor(Math.random() * possibleChar.length)])
      }
      // guaranteedChar is an array, combine them into one string
      newPassword = guaranteedChar.join("");

      // generatePassword() = newPassword
      return newPassword;
    }
    // if the user doesnt type a number, alert and reset
    else {
      alert("Please insert a number.")
      writePassword()
    }
  }

}

// this function is called when button is clicked
function writePassword() {
  var password = generatePassword();
  // variable is now connected to the text area in HTML
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);