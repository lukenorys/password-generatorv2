// declare functions needed upperCase / lowerCase / numbers / specChar needed ( " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~") special characters.
const pwLength = window.prompt("Type a number between 8 & 128 for password length. Example: 17")
while (pwLength < 8 || howLong > 128) {
    pwLength = window.prompt("Your selection must be a number between 8 and 128. Please type in a number value.");
  }

  pwLength = parseInt(pwLength);

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
