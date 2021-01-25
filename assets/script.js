// declare password length with validation for correct number range
let pwLength = window.prompt("Type a number between 8 & 128 for password length. Example: 17")
while (pwLength < 8 || howLong > 128) {
    pwLength = window.prompt("Your selection must be a number between 8 and 128. Please type in a number value.");
    pwLength = parseInt(pwLength);
  };

//declare variables with validation that AT LEAST ONE field is selected
let upperCase = confirm("Would you like to include uppercase letters?");
let lowerCase = confirm("How about lowercase letters?");
let numbChara = confirm("Let's add some numbers in there, yes?");
let specChara = confirm("How about some special characters to top it off?");

// declare functions / variables needed upperCase / lowerCase / numbers / specChar needed ( " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~") special characters.


// add window.prompts for criteria. create validation to ensure at least one character type was selected


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
