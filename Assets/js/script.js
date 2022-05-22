// assigning possible character sets 
var lowercaseCharSet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharSet = "0123456789";
var specialCharset = "~`! @#$%^&*()_-+={[}]|;'<>.?/";

// Asking for input for password length here
var getPasswordLength = function() {
  var passwordlength = "";

    // checking to make sure password input is not empty
    while (passwordlength === "" || passwordlength === null) {
      passwordlength = prompt (" Let me know how many characters should be in your password, choose a number between 8 and 128");
  }

  // parsing password value into integer
  passwordlength = parseInt(passwordlength);

  // chacking to make sure password length input is not less than 8 and not greater than 128
  if (passwordlength < 8 || passwordlength > 128) {
     window.alert("Sorry, but your password must be between 8 and 128 characters in length. Please input again.")
          return getPasswordLength();
  }
      return passwordlength;
};

// Asking for input on uppercase or lowrercase values
var getCaseValue = function () {
  var getCaseValueOptionPrompt = window.prompt(
    "Would you like UPPERCASE or lowercase characters? Please enter 1 for UPPERCASE or 2 for lowercase."
  );

  // changing input value to integer
  getCaseValueOptionPrompt = parseInt(getCaseValueOptionPrompt);

  // use switch case to assign value of uppercase or lowercase

  switch (getCaseValueOptionPrompt) {
    case 1:
      getCaseValueOptionPrompt = "UPPERCASE";
      return getCaseValueOptionPrompt;
    case 2:
      getCaseValueOptionPrompt = "lowercase";
      return getCaseValueOptionPrompt;

  // if user did not enter a valid response
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

    // changing value to integer
    getNumericValueOptionPrompt = parseInt(getNumericValueOptionPrompt);

    // use switch to assign values of Numeric or no Numeric

    switch (getNumericValueOptionPrompt) {
      case 1:
        getNumericValueOptionPrompt = "Numeric";
        return getNumericValueOptionPrompt;
      case 2:
        getNumericValueOptionPrompt = "No Numeric";
        return getNumericValueOptionPrompt;

    // asking user to input again if invalid response
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

    // changing response to integer
    getSpecialValueOptionPrompt = parseInt(getSpecialValueOptionPrompt);

    // use switch to assign values of special character choice

    switch (getSpecialValueOptionPrompt) {
      case 1:
        getSpecialValueOptionPrompt = "special";
        return getSpecialValueOptionPrompt;
      case 2:
        getSpecialValueOptionPrompt = "No special";
        return getSpecialValueOptionPrompt;
    
        // ask user to input value again if not valid
        default:
          window.alert("You did not enter a valid option. Please enter the value 1 or 2.")
      return getSpecialValue();
    }
};


// User password input values are here
var UserPassword ={
    length: getPasswordLength(),
    CaseValue: getCaseValue(),
    numeric: getNumericValue(),
    specialCharacter: getSpecialValue(),
};

// generating password function
var generatePassword = function () {

  // start with empty string for character set
  var concatString = "";
  // var concatString2 = "";

  // Check to see if case value is set to UPPERCASE and if so concat uppercaseCharSet
  if (UserPassword.CaseValue === "UPPERCASE") {
    concatString = concatString.concat(uppercaseCharSet);

    // if it is UPPERCASE - Also check to see if numeric is set to yes and concat numericCharSet
    if (UserPassword.numeric === "Numeric"){
      concatString = concatString.concat(numericCharSet);
    }

    // Also check to see if UPPERCASE include special characters and if so concat numericCharSet
    if (UserPassword.specialCharacter === "special") {
      concatString = concatString.concat(specialCharset);
    }

  }
    // check to see if case value was lowercase and if so concat lowercaseCharSet
    if (UserPassword.CaseValue === "lowercase") {
      concatString = concatString.concat(lowercaseCharSet);
 

    // if it is lowercase - Also check to see if numeric is set to yes and concat numericCharSet
    if (UserPassword.numeric === "Numeric"){
      concatString = concatString.concat(numericCharSet);
    }

    // Also check to see if lowercase incluse special characters and if so concat numericCharSet
    if (UserPassword.specialCharacter === "special") {
      concatString = concatString.concat(specialCharset);
    }
  }

  // setting empty password string
  var passwordstring = "";

  // loop through the concatstring and choose random characters until the character length is met
  for ( var length = 0; length < UserPassword.length; length ++) {
    passwordstring += concatString.charAt(Math.floor(Math.random() * length));
  }
  return passwordstring;
  };

// // Generate Password
generatePassword ();

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