// Assignment Code
var generateBtn = document.querySelector("#generate");

// my variables
var upCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'X', 'Z']
var lowCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var specChar = ['!', '@', '#', '$', '%', '^', '&', '*', '_', ':', '?', '>', '<', '.', '/','-']
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

var ranChar = {
  upCase: ranUpCase,
  lowCase: ranLowCase,
  specChar: ranSpecChar,
  numbers: ranNumbers
};

// functions to get random letters, special characters, and numbers
function ranUpCase() {
  // Math.random chooses a random number, Math.floor rounds down to a whole number
  return upCase[Math.floor(Math.random() * upCase.length)];
}
function ranLowCase() {
  return lowCase[Math.floor(Math.random() * lowCase.length)];
}
function ranSpecChar() {
  return specChar[Math.floor(Math.random() * specChar.length)];
}
function ranNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
                          // // randomize elements of an array
                          // function ranArray(arr) {
                          //   return arr[Math.floor(Math.random() * arr.length)]
                          //   }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  // save the input value
  var passLength = prompt("How many characters should the password be?");
  //to check
  console.log(passLength);

  // if the user cancels the prompt, alert
  if (passLength === null || passLength === "") {
    alert("If you don't want to generate a password, \nwhy are you here???");
  }
  // if the number is less than 8 or greater than 128, alert and reset
  else if ((passLength <8) || (passLength >128)) {
    alert("Please type in a number between 8 and 128.");
    writePassword();
  }
  // if number is between 8-128, check other cases
  else if ((passLength > 8) && (passLength < 128)) {
    //to check
    console.log(passLength);

    //user chooses which criterias to include
    var hasLowCase = confirm('Should it include lower case letters?');
    var hasUpCase = confirm('Should it include upper case letters?');
    var hasSpecChar = confirm('Should it like to include special characters?');
    var hasNum = confirm('Should it like to include numbers.');

    // if user doesn't choose at least one criteria, restart
    if (
      hasLowCase === false &&
      hasUpCase === false &&
      hasSpecChar === false &&
      hasNum === false ) {
      alert('Must choose one character type');
      writePassword();
    }
    else
      //store user inputs and check with console.log
      var passOptions = {
        length: passLength,
        hasLowCase: hasLowCase,
        hasUpCase: hasUpCase,
        hasSpecChar: hasSpecChar,
        hasNum: hasNum
      };
      console.log(passOptions);

      //generate the password
      function generatePassword() {


      }

// Variable to store the password as its being created we will be PUSHING the results as they are happening here
var result = [];

// Create an array to store the types of characters to inclue in the password
var possibleChar = [upcase, lowcase, specChar, numbers];

// create an array to store guaranted characters
var guarantedChar = [passOptions];




  }
  
  // if the user doesnt type a number, alert and reset
  else {
    alert("Please insert a number.")
    writePassword()
  }
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);