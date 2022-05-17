// Assignment code here

// Asking for input for password length here
var getPasswordLength = function() {
  var passwordlength = "";
  while (passwordlength === "" || passwordlength === null) {
      passwordlength = prompt (" Let me know how many characters should be in your password, choose a number between 8 and 128");
  }

  // parsing password value into integer
  passwordlength = parseInt(passwordlength);

  // chacking to make sure password length input is not less than 8 and not greater than 128
  if (passwordlength < 8 || passwordlength > 128) {
     window.alert("Sorry, but your password must be between 8 and 128 characters in length. Please input again.")
     console.log("original number choice was " + passwordlength);
     return getPasswordLength();
  }
  console.log("You have chosen a password length of " + passwordlength);
  return passwordlength;
};

// password values here
var UserPassword ={
    length: getPasswordLength(),
    uppercase: false,
    lowercase: true,
    numeric: true,
    specialCharacter: true,

}


console.log("Your password length has been recorded as " + UserPassword.length );

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var password = UserPassword.length;
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
