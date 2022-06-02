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
    return askPasswordLength();
  }
  return passwordLength;
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
  
  // user needs to select at lease one criteria
  if (lowerCaseWanted || upperCaseWanted || symbolsWanted || numbersWanted) {

    return {
      // object - short hand of lowercaseWanted: lowercasewanted,
      lowerCaseWanted,
      upperCaseWanted,
      symbolsWanted,
      numbersWanted,
    };

  } 
  
  // if user did not, reask the criteria questions again 
  return askCriteria();
}

// when user clicks on the password generator button

generatorButton.addEventListener('click', function(event){
  
  const passwordLength = askPasswordLength();
  const criteria = askCriteria();
  // generate the password
  // build the character set
  let characterSet = "";

  if(criteria.lowerCaseWanted){
    characterSet = characterSet + "abcdefghijklmnopqrstuvwxyz";
  }

  if(criteria.upperCaseWanted){
    characterSet = characterSet + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  if(criteria.symbolsWanted){
    characterSet = characterSet + "!@#$%^&";
  }

  if(criteria.numbersWanted){
    characterSet = characterSet + "0123456789";
  }

  // generate the random password based on the character set
  let password = "";

  // loop for passwordLength times
  for (let index = 0; index < passwordLength; index++) {
    const randomCharacter = characterSet[ Math.floor(Math.random() * characterSet.length)] 
    
    // add this random character to password
    // shorthand for password = password + randomCharacter 
    password += randomCharacter;
  }
  console.log(password);

  // show the password on the DOM textarea
  document.getElementById('password').value = password;
});
