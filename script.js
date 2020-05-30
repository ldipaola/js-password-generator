// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerEl = document.querySelector("#lower");
var upperEl = document.querySelector("#upper");
var numericEl = document.querySelector("#numeric");
var specialEl = document.querySelector("#special");


//Special character array
var specialCharsArr = [String.fromCharCode(32), '!', '"', '#', '$', '%', '&', "'", ')', '(', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
//Input validation to ensure number is being entered and between 8-128 characters
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
//Random number generator
function randomNumberGenerator(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//push selected character types to an array and generate password
function generatePassword() {
  let passwordCharLength = inputValidation();
  let password = "";
  let conditionArr = [];
  if(passwordCharLength){
  if(lowerEl.checked) conditionArr.push("lower");
  if(upperEl.checked) conditionArr.push("upper");
  if(numericEl.checked) conditionArr.push("numeric");
  if(specialEl.checked) conditionArr.push("special");
  if(lowerEl.checked === false && upperEl.checked === false && numericEl.checked === false && specialEl.checked === false){
    alert("at least one character type should be selected");
    return "No characters selected!";
  }
  //loop for password generation
  //using randomly generated values from ASCII chart for lower, upper and numeric characters. special characters are from the specialCharsArr
  for(let i = 0; i < passwordCharLength; i++){
    let randomSelector = conditionArr[randomNumberGenerator(0,conditionArr.length-1)];
    if(randomSelector === "lower"){
      password += String.fromCharCode(randomNumberGenerator(97,122));
    }else if(randomSelector === "upper"){
      password += String.fromCharCode(randomNumberGenerator(65,90));
    }else if(randomSelector === "numeric"){
      password += String.fromCharCode(randomNumberGenerator(48,57));
    }else if(randomSelector === "special"){
      password += specialCharsArr[randomNumberGenerator(0, specialCharsArr.length-1)];
    }
    }
  }
  return password;
}  


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


