// Assignment code here

const generatorButton = document.getElementById("generate");

function askPasswordLength() {
  // ask the user how long the password be?
  
  const passwordLength = Number(prompt("How long is your password? (Must be 8 - 128 characters long)"));
  
  console.log(passwordLength);
  // only accept numeric number
  // if user type in rubbish or does not match set character length, reask the question
  // NaN, 0, <8 or >128
  
  const passswordIsNan = isNaN(passwordLength);
  const passwordNotEntered = passwordLength === 0;
  const passswordNotInaRange = passwordLength < 8 || passwordLength > 128;
  
  if(passswordIsNan || passwordNotEntered || passswordNotInaRange){
    return passwordLength;
  }
}

function askCriteria() {
  // ask so you want lower case y/n
  const lowerCaseWanted= confirm("Do you want lower case?");
  // ask so you want upper case y/n
  const upperCaseWanted = confirm("Do you want upper case?");
  // ask so you want symbols y/n
  const symbolsWanted = confirm("Do you want symbols?");
  // ask so you want numbers y/n
  const numbersWanted = confirm("Do you want numbers?");
  
  // user needs to sselect at lease one criteria 
  // if user did not, reask the criteria questions again 

}

// when user clicks on the password generator button

generatorButton.addEventListener('click', function(event){
  const passwordLength = askPasswordLength();
  // geerate the password
  
  // show the passsword on the DOM textarea


});

 

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
