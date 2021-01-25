// declare password length with validation for correct number range
var pwLength = window.prompt("Type a number between 8 & 128 for password length. Example: 17")
while (pwLength < 8 || pwLength > 128) {
    pwLength = window.prompt("Your selection must be a number between 8 and 128. Please type in a number value.");
  };

//declare variables with validation that AT LEAST ONE field is selected (specChara needed ( " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~") special characters.)
var upperCase = window.confirm("Would you like to include uppercase letters?");
var lowerCase = window.confirm("How about lowercase letters?");
var numbChara = window.confirm("Let's add some numbers in there, yes?");
var specChara = window.confirm("How about some special characters to top it off?");

// if user picks none, the not indicator, !, will trigger this response

while(!(upperCase || lowerCase || numbChara || specChara)) {
  window.alert("You must select at least one of the following when prompted.");
  upperCase = window.confirm("Would you like to include uppercase letters?");
  lowerCase = window.confirm("How about lowercase letters?");
  numbChara = window.confirm("Let's add some numbers in there, yes?");
  specChara = window.confirm("How about some special characters to top it off?");
};

function generatePassword() {
  var createdPw = "";
  var allowed = [];

  while (createdPw.length < pwLength) {
    if (upperCase) {
      createdPw += getRandomUpper(allowed.upperCase);
    }
    if (createdPw.length >= pwLength) break;
    if(lowerCase){
      createdPw += getRandomLower(allowed.lowerCase);
    }
    if(createdPw.length >= pwLength) break;
    if (numbChara) {
      createdPw += getRandomNumber(allowed.numbChara)
    }
    if (createdPw.length >= pwLength) break;
    if (specChara) {
      createdPw += getSpecChara(allowed.specChara);
    }
  }
  return createdPw;
};

// get random (char codes from https://net-comber.com/charset.html)

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26 ) + 65);
};
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random()* 26) + 97);
};
function getRandomNumber() {
  return Math.floor(Math.random() * 10);
};
function getSpecChara() {
  return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
};

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
