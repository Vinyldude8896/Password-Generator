// Assignment code here

// Asking for input for password length here
var getPasswordLength = function() {
  var passwordlength = "";
  while (passwordlength === "" || passwordlength === null) {
      passwordlength = prompt (" Let me know how many characters should be in your password, choose a number between 8 and 128");
  }

  // pazrsing password value into integer
  passwordlength = parseInt(passwordlength);

  if (passwordlength < 8 ) {
     window.alert("Sorry, but your password must be at least 8 characters in length. Please input again.")
     console.log("original number choice was " + passwordlength);
     getPasswordLength();
  }
  else{
  console.log("You have chosen a password length of " + passwordlength);
  return passwordlength;
  }
};


// password values here
var password ={
    length: getPasswordLength(),
    uppercase: false,
    lowercase: true,
    numeric: true,
    specialCharacter: true,

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
