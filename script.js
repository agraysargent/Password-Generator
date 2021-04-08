// Assignment Code
var generateBtn = document.querySelector("#generate");
var enter;
var confirmNumber;
var confirmCharacter;
var confirmLowercase;
var confirmUppercase;

// list of special characters
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// list of numbered characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// list of alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for uppcase version, also displaying function for uppercase conversion
space = [];

var choices;
var toUpper = function (x) {
  return x.toUpperCase();
};
alpha2 = alpha.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // asks for user input
  enter = parseInt(prompt("How many characters would you like in your password? Choose between 8 and 128 characters."));
  if (!enter) {
    alert("This needs a value");
  } else if (enter < 8 || enter > 128) {
    // confirms the user's inputs and ensures user inputs are correct
    enter = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain uppercase letters?");
    confirmLowercase = confirm("Will this contain lowercase letters?");
  };

}

// if user fails to enter in correct items, then the following alerts will appear

if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
  choices = alert("You must an item to fit the password parameters!");
}

// if the user uses the correct inputs when establishing their password choices, will reveal the 4 out of 4 password options

else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
  choices = character.concat(number, alpha, alpha2);
}

// else if if they use 3 out of the 4 password options

else if (confirmCharacter && confirmNumber && confirmLowercase) {
  choices = character.concat(number, alpha);
}

else if (confirmCharacter && confirmNumber && confirmUppercase) {
  choices = character.concat(number, alpha2);
}

else if (confirmNumber && confirmLowercase && confirmUppercase) {
  choices = character.concat(alpha, alpha2);
}

// else if the user only selects 2 out of the 4 password options

else if (confirmCharacter && confirmNumber) {
  choices = character.concat(number);
}

else if (confirmCharacter && confirmLowercase) {
  choices = character.concat(alpha);
}

else if (confirmCharacter && confirmUppercase) {
  choices = character.concat(alpha2);
}

else if (confirmNumber && confirmLowercase) {
  choices = number.concat(alpha);
}

else if (confirmNumber && confirmUppercase) {
  choices = number.concat(alpha2);
}

else if (confirmLowercase && confirmUppercase) {
  choices = alpha.concat(alpha2);
}

// else if the user selects only 1 out of 4 password options

else if (confirmCharacter) {
  choices = character;
}

else if (confirmNumber) {
  choices = number;
}

else if (confirmLowercase) {
  choices = alpha;
}

else if (confirmUppercase) {
  choices = space.concat(alpha2);
}

// password length = password variable for the length
var password = [];

// random variable selection and random selection for every variable

for (var i = 0; i < enter; i++) {
  var pickChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(pickChoices);
}