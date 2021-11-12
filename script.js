// Assignment code here
var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  lowerCase: "abcdefghijklmnopqrstuvwxyz"
  number: "0123456789"
  special: "!@#$%^&*()_+-?.,/"
};

window.prompt("How long will your password be? Choose between 8 and 128.");
function generatePassword() {

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