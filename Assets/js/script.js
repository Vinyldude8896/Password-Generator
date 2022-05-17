// Assignment code here

var lowercaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharSet = "0123456789";
var specialCharset = "~`! @#$%^&*()_-+={[}]|;'<>.?/";

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
      getCaseValueOptionPrompt = "UPPERCASE";
      return getCaseValueOptionPrompt;
    case 2:
      getCaseValueOptionPrompt = "lowercase";
      return getCaseValueOptionPrompt;

  default:
    window.alert("You did not choose a valid option. Please try again.")

    // call getCaseValue again to force input from user
    return getCaseValue();
  }

};

// asking user if they want numeric values in the password
var getNumericValue = function () {
    var getNumericValueOptionPrompt = window.prompt(
      "Would you like numeric values in your password? Please enter 1 for 'Yes' or 2 for 'No'."
    );

    getNumericValueOptionPrompt = parseInt(getNumericValueOptionPrompt);

    // use switch to carry out action

    switch (getNumericValueOptionPrompt) {
      case 1:
        getNumericValueOptionPrompt = "Numeric";
        return getNumericValueOptionPrompt;
      case 2:
        getNumericValueOptionPrompt = "No Numeric";
        return getNumericValueOptionPrompt;

    default:
      window.alert("You did not enter a valid option. Please enter the value 1 or 2.")
      return getNumericValue();
    }
};

// asking user if they want special characters added to their password

var getSpecialValue = function () {
  var getSpecialValueOptionPrompt = window.prompt (
    "Would you like special charcaters such as these added to your password '$ % & # !'. Please enter 1 for 'Yes' or 2 for 'No'"
    );

    getSpecialValueOptionPrompt = parseInt(getSpecialValueOptionPrompt);

    // use switch tto carry out action

    switch (getSpecialValueOptionPrompt) {
      case 1:
        getSpecialValueOptionPrompt = "special";
        return getSpecialValueOptionPrompt;
      case 2:
        getSpecialValueOptionPrompt = "No special";
        return getSpecialValueOptionPrompt;
    
        default:
          window.alert("You did not enter a valid option. Please enter the value 1 or 2.")
      return getSpecialValue();
    }
};

// var GetCharacterSet = function () {

//   debugger;
//   var charsettemp = getCaseValueOptionPrompt;

//   if (getCaseValueOptionPrompt = "UPPERCASE"){
//     charsettemp = uppercaseCharSet;
//   } 
//   else if (getCaseValueOptionPrompt = "lowercase") {
//     charsettemp = lowercaseCharSet;
//   }
//   return charsettemp;
// };


// password values here
var UserPassword ={
    length: getPasswordLength(),
    CaseValue: getCaseValue(),
    numeric: getNumericValue(),
    specialCharacter: getSpecialValue(),
    charSet: "",
}


 



console.log("Your password length has been recorded as " + UserPassword.length );
console.log("you have chosen your character case type as " + UserPassword.CaseValue);
console.log("You have chosen your numeric value as " + UserPassword.numeric);
console.log("You have chosen this response for special characters " + UserPassword.specialCharacter);
console.log("Your Password will be " + UserPassword.length + " characters in length." + " You have chosen " + UserPassword.CaseValue + ",  " + UserPassword.numeric + ", and " + UserPassword.specialCharacter +" characters.");
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //var password = generatePassword();
  var password = UserPassword.charSet;
  var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
