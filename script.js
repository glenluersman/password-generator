// Get references to the #generate element
var generateBtn =
// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var length = "";
var number = "";
var lower = "";
var upper = "";

function generatePassword() {
  var length = window.prompt("What is the length of your password? Length must be between 8 and 128 characters.");
    while (length <= 7  || length >= 129) {
      window.alert("Password length must be between 8 and 128 characters try again.");
      window.alert("Your password will contain " + length + " characters.");
      return length;
    };
    console.log("Pasword length is " + length);

  var number = window.prompt("How many numbers would you like to use?");
    while (number === "" || number === null) {
      window.alert("Enter a valid response.");
      window.alert("You have chosen " + number + " numbers.");
      return number;
    };
    console.log(number + " numbers");

  var lower = window.prompt("How many lower case letters would you like to use?");
    while (lower === "" || lower === null) {
      window.alert("Enter a valid response.");
      window.alert("You have chosen " + lower + " lower case letters.");
      return lower;
    };
    console.log(lower + " lower case letters")

    var upper = window.prompt("How many upper case letters would you like to use?");
      while (upper === "" || upper === null) {
        window.alert("Enter a valid response.");
        window.alert("You have chosen " + upper + " upper case letters.");
        return upper;
      };
      console.log(upper + " upper case letters")

      var special = window.prompt("How many special characters would you like to use?");
        while (special === "" || special === null) {
          window.alert("Enter a valid response.");
          window.alert("You have chosen " + special + " special characters.");
          return special;
        };
        console.log(special + " special characters");
  };

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

writePassword()
generatePassword()