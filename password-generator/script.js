// Assignment code here
var length = 8;
var chars =[];
var lowercase =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercase =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers =['0','1','2','3','4','5','6','7','8','9'];
var specialChars =['!','@','#','$','%','^','&','*','(',')','?','>','<',';',':'];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function criteria(){
   length = parseInt(prompt("Password must be between 8-128 characters"));

   if (confirm("Do you want to use lowercase letters?")){
    chars =chars.concat(lowercase)
   }

   if(confirm("Do you want to use uppercase letters?"))
   chars =chars.concat(uppercase)

   if(confirm("Do you want to use numbers?"))
   chars =chars.concat(numbers)

   if(confirm("Do you want to use special characters?"))

   return true;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
