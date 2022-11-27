//Defining variables for password criteria
// var upperCase = ['A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,X,Z'].split(' , ')
// var lowerCase = ['a,b,c,d,e,f,g,h,i,j,k,l,m,m,n,o,p,q,r,s,t,u,v,w,x,y,z'].split(' , ')
// var specChar = [!,@,#,$,%,^,&,*,(,),_,+,},{,",:,?,>,<,,,.,/,',;,[,],=,-"}].split(' , ')
// var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

// promt user for password criteria
// create a function to prompt user for password options
function passOptions() {

//Variable to store my user password length which need to be between 8 and 128 characters
var length = parseInt (prompt('How many characters would you like your password to be?'));
console.log(length)

//check if its not a number
if (Number.isNaN(length)) {
  alert('Password must be a numeric number');
  return null;
}

// conditional to check if user enters a number 8 and greater
if (length < 8) {
  alert('pass length has to be 8 or more');
  return null;
}

if (length > 128) {
  alert('pass length has to be less than 128');
  return null;
}

// Conditional statements to check whether a user wants lower, upper, numbers, or special characters.
var hasLowerCase = confirm('Would you like to include lower case letter.');
var hasUpperCase = confirm('Would you like to include upper case letter.');
var hasSpecChar = confirm('Would you like to include special characters.');
var hasNumbers = confirm('Would you like to include numbers.');


// Create a conditional to make sure aat least one character type is selected
if (
  hasLowerCase === false &&
  hasUpperCase === false &&
  hasSpecChar === false &&
  hasNumbers === false
) {
  alert('Must choose one character type')
  return null
}

}

passOptions();

// lenght of password has to be AT LEAST 8 characters and no more than 128

// password needs to include lowercase, uppercase, numeric, and/or special characters

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
