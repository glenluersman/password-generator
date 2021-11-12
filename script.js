// Assignment code here
var characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

var getPassword = function() {
  var length = window.prompt("What is the length of your password? Length must be between 8 and 128 characters.");

    var upperCase = function() {
      var char1 = window.prompt("how many upper case characters?");
    }   

    var lowerCase = function() {
      var char2 = window.prompt("how many lower case characters?");
    }

    var numbers = function() {
      var char3 = window.prompt("How many numbers?");
    }

    var symbols = function() {
      var char4 = window.prompt("how many special characters?");
    }
}
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

getPassword()