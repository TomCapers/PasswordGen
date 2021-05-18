// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [1,2,3,4,5,6,7,8,9,0];
var special = ["!","@","$","%","&","?","<",">","(",")"];


// Write password to the #password input
function userSelections() {
  var passLength;
  
  prompt("Please enter the length of the password");

  if (passLength < 8) {
    prompt("Password must be at least 8 characters long");
  }else if (passLength > 128) {
    prompt("Password cannot be longer the 128 characters");
  }else{
    console.log(passLength);
  }

  if (passLength !== null) {
    var useUpper;
    
    confirm("Would you like to use uppercase letters?");
    if (useUpper == true) {
      console.log(useUpper);
    }

  if (useUpper !== null) {
    var useLower;
    confirm("Would you like to use uppercase letters?");
    if (useLower == true) {
      console.log(useLower);
    }
  }

  if (useLower !== null) {
    var useNumber;
    confirm("Would you like to use numbers?");
    if (useNumber == true) {
      console.log(useLower);
    }
  }

  if (useNumber !== null) {
    var useSpecial = confirm("Would you like to use special characters?");
    if (useSpecial == true) {
      console.log(useLower);
    }
  } 

  

}}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
event.preventDefault();
userSelections();
})
//generateBtn.addEventListener("click", writePassword);
