// Assignment Code
var generateBtn = document.querySelector("#generate");

function inputValidation() {
  var passWordLength = prompt("Enter password length (8-128 characters): ");
   if(passWordLength === null) {
     return;
   } else if(isNaN(passWordLength) || passWordLength < 8 || passWordLength > 128){
     alert("Invalid input!");
     inputValidation();
   }
   return passWordLength;
}

function generatePassword() {
  var passwordCharLength = inputValidation();
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
