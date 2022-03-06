
//Global Variables 

var lowerPrompt;
var upperPrompt;
var numericPrompt;
var specialPrompt;
var characters = [];
var i = 0;
// Assignment code here

// The random number/Numeric function
function rndm(min,max) {
  min = Math.ceil(min)
  max= Math.floor(max)
  //console.log(Math.floor(Math.random() * (max - min) + min));
  return Math.floor(Math.random() * (max - min) + min);
  }
  //Uppercase letter generator
  function genUpper() {
    var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var upperLetter = upperCase[rndm(0,26)];
    return upperLetter;
  }
  //Lowercase letter generator
  function genLower() {
    var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var lowerLetter = lowerCase[rndm(0,26)];
    return lowerLetter;
  }
  //Special Character letter generator
  function genSpecial() {
    var specialChars = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","'\'",']','^', "_", '`','{',"|","}","~"];
    var specialChar = specialChars[rndm(0,32)];
    return specialChar;
  }
  //the prompt function
  function prompts() {
    lowerPrompt = window.confirm("Would you like Lowercase characters in your password?");
    upperPrompt = window.confirm("Would you like Uppercase characters in your password?");
    numericPrompt = window.confirm("Would you like Numeric characters in your password?");
    specialPrompt = window.confirm("Would you like Special characters in your password?");
  }
  
  function generatePassword() {
    //Prompt for password length
    var lengthPrompt = window.prompt("How many characters would you like your password to have?");
    if (lengthPrompt > 8 && lengthPrompt<128) {
      prompts();
    }else {
      window.alert("Password Length may only be 8-128 Characters long!");
      return;
    } //Prompt validation
   if (lowerPrompt,upperPrompt,numericPrompt,specialPrompt == false) {
     var confirm =window.confirm("You need to select at least 1 type of chacter to proceed")
      if (confirm) {
        prompts();
      } else {
      return;
    }
   }
   //The Password Generator
  while(i<lengthPrompt) {
    var num = rndm(1,5)
    i++;
    if (num === 1 && lowerPrompt){
      console.log(num)
    characters[i] =genLower();
    } else if (num === 2 && upperPrompt) {
      console.log(num)
    characters[i] = genUpper();
    } else if (num === 3 && numericPrompt) {
      console.log(num)
      characters[i] = (rndm(1,10));
    } else if (num === 4 && specialPrompt) {
      console.log(num)
      characters[i] = genSpecial();
    } else {
      i--
    }
  }
  return characters.join("");
  }
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
