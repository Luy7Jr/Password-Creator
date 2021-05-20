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

    var lowerCaseConfirm = confirm("Want your password to contain lowercase?");
        if(lowerCaseConfirm === true) {
            for (var i=0; i<lowerCaseCharacters.length; i++) {
                collectionOfVariables.push(lowerCaseCharacters[i]);
            }
        }

    var upperCaseConfirm = confirm("Want your password to contain uppercase?");
        if (upperCaseConfirm === true) {
            for (var i=0; i<upperCaseCharacters.length; i++) {
                collectionOfVariables.push(upperCaseCharacters[i]);
            
            }
        }

    var numberConfirm = confirm("Want your password to include numbers?");
        if (numberConfirm === true) {
            for (var i=0; i<numberCharacters.length; i++) {
            collectionOfValids.push(numberCharacters[i]);
            } 
        }
    
    var specialConfirm = confirm("Want your password to contain special characters?");
        if (specialConfirm === true)  {
            for (var i=0; i<specialCharacters.length; i++) {
                collectionOfValids.push(specialCharacters[i]);
            }
        }

    var randomPassword = "";
    for (var i=0; i<lengthConfirm; i++) {
         collectionOfValids[Math.floor(Math.random() * collectionOfValids.length)];
    }
  return randomPassword;
}


    

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
