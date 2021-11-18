
// Assignment code here
var number = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var characters = "";

function generatePassword() {
  var length = Number(prompt("What is the length of your password? Length must be between 8 and 128 characters."));
  while (length <= 7  || length >= 129) {
    window.alert("Password length must be between 8 and 128 characters try again.");
    var length = Number(prompt("What is the length of your password? Length must be between 8 and 128 characters."));
  };
  
  var numbers = window.confirm("Would you like numbers in your password?");
  var lowerCase = window.confirm("Would you like lower case letters in your password?");
  var upperCase = window.confirm("Would you like upper case letters in you password?");
  var specialChars = window.confirm("Would you like special characters in your password?");
  while (numbers === false && lowerCase === false && upperCase === false && specialChars === false) {
    window.alert("You must choose at least one perameter!");
    var numbers = window.confirm("Would you like numbers in your password?");
    var lowerCase = window.confirm("Would you like lower case letters in your password?");
    var upperCase = window.confirm("Would you like upper case letters in you password?");
    var specialChars = window.confirm("Would you like special characters in your password?");
  };
  
  if (numbers) {
    characters += number
  }
  if (lowerCase) {
    characters += lower
  }
  if (upperCase) {
    characters += upper
  }
  if (specialChars) {
    characters += special
  }
  
  var newPassword = "";
  for (var i = 0; i < length; i++) {
    newPassword = characters[Math.floor(Math.random() * characters.length)];
  }
  console.log(newPassword);
  return newPassword;
  
};
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
    
  };
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
