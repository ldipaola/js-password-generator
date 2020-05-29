// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharsArr = [' ', '!', '"', '#', '$', '%', '&', "'", ')', '(', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

//Input validation function to ensure number is being entered and between 8-128 characters
function inputValidation() {
  //regex numbers 0-9
  let numbers = /^[0-9]+$/;
  let passwordInputLength = prompt("Enter password length (8-128 characters): ");
  if(passwordInputLength === null){
    return false;
  }else if(passwordInputLength.match(numbers) && parseInt(passwordInputLength) > 7 && parseInt(passwordInputLength) < 129 ){
    return parseInt(passwordInputLength);
  }else{
    alert("Invalid input");
    inputValidation();
  }
}
//Random number generator function
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function generatePassword() {
  var passwordCharLength = inputValidation();
  var password = "";
  var conditionArr = [];
  if(passwordCharLength){
  var lowercaseChars = confirm("Would you like lowercase characters?");
  if(lowercaseChars) conditionArr.push("lower");
  var uppercaseChars = confirm("Would you like uppercase characters?");
  if(uppercaseChars) conditionArr.push("upper");
  var numericChars = confirm("Would you like numeric characters?");
  if(numericChars) conditionArr.push("numeric");
  var specialChars = confirm("Would you like special characters?");
  if(specialChars) conditionArr.push("special");
  if(lowercaseChars === false && uppercaseChars === false && numericChars === false && specialChars === false){
    alert("at least one character type should be selected");
    return;
  }

  for(var i = 0; i < passwordCharLength; i++){
    var randomSelector = conditionArr[randomNumberGenerator(0,conditionArr.length-1)];
    if(randomSelector === "lower"){
      password += String.fromCharCode(randomNumberGenerator(97,122));
    } else if(randomSelector === "upper"){
      password += String.fromCharCode(randomNumberGenerator(65,90));
    }else if(randomSelector === "numeric"){
      password += String.fromCharCode(randomNumberGenerator(48,57));
    } else if(randomSelector === "special"){
      password += specialCharsArr[randomNumberGenerator(0, specialCharsArr.length-1)];
    }
    }
  }
  return password;
}  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password.length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
