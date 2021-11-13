// Assignment code here
var characters = {
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lower: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
};

function passwordLength() {
  var length = "";
  
  while (length === "" || length === null) {
    length = prompt("What is the length of your password? Length must be between 8 and 128 characters.");
  }

  console.log("Password length is " + length);
  return length;
}
  
function getPassword() {
  
};
    
function upperCase(char1) {
  var char1 = "";

  while (char1 === "" || char1 === null) {
  char1 = prompt("how many upper case characters?");
}

console.log(char1 + " upper case letters.");

return char1;
};

function lowerCase(char2) {
  var char2 = "";
      
  while (char2 === "" || char2 === null) {
  char2 = prompt("how many lower case characters?");
  }

  console.log(char2 + " lower case letters.");
  return char2;
};

function numbers(char3) {
  var char3 = "";
  
  while (char3 === "" || char3 === null) {
  char3 = prompt("How many numbers?");
  }

  console.log(char3 + " numbers.");
  return char3;
};

function symbols(char4) {
  var char4 = "";
  
  while (char4 === "" || char4 === null) {
  char4 = prompt("how many special characters?");
  }

  console.log(char4 + " special characters.");
  return char4;
};

function generatePassword() {

};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

passwordLength()
upperCase()
lowerCase()
numbers()
symbols()