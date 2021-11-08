// Assignment code here
const characterAmountRange = document.getElementById("characterAmountRange")
const characterAmountNumber = document.getElementById("characterAmountNumber")
const includeLowercaseElement = document.getElementById("includeLowercase")
const includeUppercaseElement = document.getElementById("includeUppercase")
const includeNumbersElement = document.getElementById("includeNumbers")
const includeSpecialElement = document.getElementById("includeSpecial")

const lowercaseCodes = arrayCharacterSelection(97,122)
const uppercaseCodes = arrayCharacterSelection(65, 90)
const numberCodes = arrayCharacterSelection(48, 57)
const specialCodes = arrayCharacterSelection(33, 47).concat(arrayCharacterSelection(58,64)).concat(arrayCharacterSelection(91,96)).concat(arrayCharacterSelection(123,126))
const charDefault = arr = []

const form = document.getElementById("passwordGenerator")
const passwordDsiplay = document.getElementById("passwordDisplay")

characterAmountRange.addEventListener("input", syncCharacterAmount)
characterAmountNumber.addEventListener("input", syncCharacterAmount)

function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountRange.value = value
  characterAmountNumber.value = value
}

form.addEventListener("submit", e => {
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeLowercase = includeLowercaseElement.checked
  const includeUppercase = includeUppercaseElement.checked
  const includeNumbers = includeNumbersElement.checked
  const includeSpecial = includeSpecialElement.checked
  const password = generatePassword(characterAmount, includeLowercase, includeUppercase, includeLowercase, includeNumbers, includeSpecial, charDefault)
  passwordDisplay.innerText = password

})

function generatePassword(characterAmount, includeLowercase, includeUppercase, includeLowercase, includeNumbers, includeSpecial) {
  let charCodes = charDefault
  if (includeLowercase) charCodes = charCodes.concat(lowercaseCodes)
  if (includeUppercase) charCodes = charCodes.concat(uppercaseCodes)
  if (includeNumbers) charCodes = charCodes.concat(numberCodes)
  if (includeSpecial) charCodes = charCodes.concat(specialCodes)
  

  const passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join("")
}

function arrayCharacterSelection(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

function validate() {
  var valid = false;
  if (document.getElementById("includeLowercase").checked){
  valid =true;
  }
  else if (document.getElementById("includeUppercase").checked){
  valid =true;
  }
  else if (document.getElementById("includeNumbers").checked){
  valid =true;
  } 
  else if (document.getElementById("includeSpecial").checked){
  valid =true;
  }
  if(valid){
  }
  else{
    alert("Please Select At Least (1) Character Type");
    return false;
  }
}