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

// Asking for input on uppercase or lowrercase values
var getCaseValue = function () {
  var getCaseValueOptionPrompt = window.prompt(
    "Would you like UPPERCASE or lowercase characters? Please enter 1 for UPPERCASE or 2 for lowercase."
  );

  getCaseValueOptionPrompt = parseInt(getCaseValueOptionPrompt);

  // use switch case to carry out action

  switch (getCaseValueOptionPrompt) {
    case 1:
      return getCaseValueOptionPrompt;
    case 2:
      return getCaseValueOptionPrompt;

  default:
    window.alert("You did not choose a valid option. Please try again.")

    // call getCaseValue again to force input from user
    return getCaseValue();
  }

};



// password values here
var UserPassword ={
    length: getPasswordLength(),
    CaseValue: getCaseValue(),
    numeric: true,
    specialCharacter: true,

  // setUppercase: function() {
  //   this.CaseValue = "UPPERCASE";
  // },

  // setLowercase: function() {
  //   this.CaseValue = "lowercase";
  // },

}


console.log("Your password length has been recorded as " + UserPassword.length );
console.log("you have chosen your character case type as " + UserPassword.CaseValue);


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
