// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCases = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCases = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var length = "";
var number;
var lower;
var upper;
var special;

function generatePassword() {
  var length = window.prompt("What is the length of your password? Length must be between 8 and 128 characters.");
    while (length <= 7  || length >= 129) {
      window.alert("Password length must be between 8 and 128 characters try again.");
      window.alert("Your password will contain " + length + " characters.");
      return length;
    };
    console.log("Pasword length is " + length);
    
    var number = window.confirm("Would you like numbers in your password?");
    var lower = window.confirm("Would you like lower case letters in your password?");
    var upper = window.confirm("Would you like upper case letters in you password?");
    var special = window.confirm("Would you like special characters in your password?");
      while (number === false && lower === false && upper === false && special === false) {
        window.alert("You must choose at least one perameter!");
        var number = window.confirm("Would you like numbers in your password?");
        var lower = window.confirm("Would you like lower case letters in your password?");
        var upper = window.confirm("Would you like upper case letters in you password?");
        var special = window.confirm("Would you like special characters in your password?");
      };
};
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
    
};

// Get references to the #generate element
var generateBtn =
// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword);
