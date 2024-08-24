function generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+-=";

    let password = "";
    let allowedCharacters = "";

    allowedCharacters += includeLowercase ? lowercaseChars : "";
    allowedCharacters += includeUppercase ? uppercaseChars : "";
    allowedCharacters += includeNumber ? numberChars : "";
    allowedCharacters += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return `(password length must be at least 1)`;
    }
    if(allowedCharacters.length === 0){
        return `(At least 1 set of character needs to be selected)`;
    }

    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
        password += allowedCharacters[randomIndex];
    }

    return password;
}





const generateBtn = document.getElementById("generateBtn").onclick = function(){
    const passwordDisplay = document.getElementById("passwordDisplay");
    
    let length = Number(document.getElementById("passwordLenght").value);

    let includeLowercase = document.getElementById("includeLowercaseCB").checked;
    let includeUppercase = document.getElementById("includeUppercaseCB").checked;
    let includeNumber = document.getElementById("includeNumberCB").checked;
    let includeSymbols = document.getElementById("includeSymbolsCB").checked;

    passwordDisplay.textContent = "Your Password: " + String(generatePassword(length, includeLowercase, includeUppercase, includeNumber, includeSymbols));
}




