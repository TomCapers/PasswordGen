// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var number = [1,2,3,4,5,6,7,8,9,0];
var special = ["!","@","$","%","&","?","<",">","(",")"];
var passLength;
var useUpper;
var useLower;
var useNumber;
var useSpecial;
var selArray;
var password;

// Prompt User Selections
function userSelections() {
  passLength = prompt("Please enter the length of the password");

  if (passLength < 8) {
    prompt("Password must be at least 8 characters long");
  }else if (passLength > 128) {
    prompt("Password cannot be longer the 128 characters");
  }else{
    console.log(passLength);
  }

  if (passLength !== null) {
    useUpper = confirm("Would you like to use uppercase letters?");
    if (useUpper == true) {
      console.log(useUpper);
    }

  if (useUpper !== null) {
    useLower = confirm("Would you like to use uppercase letters?");
    if (useLower == true) {
      console.log(useLower);
    }
  }

  if (useLower !== null) {
    useNumber = confirm("Would you like to use numbers?");
    if (useNumber == true) {
      console.log(useNumber);
    }
  }

  if (useNumber !== null) {
    useSpecial = confirm("Would you like to use special characters?");
    if (useSpecial == true) {
      console.log(useSpecial);
    }
  } 

  // need to add an error message if no character groups are selected - this doesn't work
   if (useUpper, useLower, useNumber, useSpecial == false){
     confirm("At least one class of characters must be chosen.");
   } return;

}}

// Create Selection Array

function selectionArray() {
  selArray = upperCase.concat(lowerCase, number, special);




// Return the concatenated selection array

}


//Generate Password

function getPasswordCharacter(selArray) {
  return (Math.floor(Math.random()*selArray.length));
}

// Write password to the #password input


function generatePassword(passLength) {
  
    for (var i = 0; i < passLength; passLength ++){
      password = getPasswordCharacter();
    }
    
}
function writePassword() {
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  }
 



// Add event listener to generate button
generateBtn.addEventListener("click", function() {
userSelections();
selectionArray();
generatePassword();
})
generateBtn.addEventListener("click", writePassword);
