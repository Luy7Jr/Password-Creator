// Assignment Code
var generateBtn = document.querySelector("#generate");

var collection0Valids = [];
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" .split("");
var lowerCaseCharacters = "abcdefghiklmnopqrsttuvwxtz" .split("");
var numberCharacters = "0123456789" .split ("");
var specialCharacters = "*&^%$#@!?><{}" .split("");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
    var passLength = prompt("Enter how many characters you'd like. Must be 8 -128 characeters.");

    var lengthConfirm = parseInt(passLength);
    console.log(lengthConfirm);

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Error! Please Try Again.");
        return;
    }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
