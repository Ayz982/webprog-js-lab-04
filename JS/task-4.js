function generatePassword(length){
    let password = "";
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        password += symbols.charAt(Math.floor(Math.random() * symbols.length));
    }
    return password;
}
function checkPassword(password, confirmPassword){
    if(password === confirmPassword){
        return true;
    }
    else{
        return false;
    }
}
function hasUpper(password){
    const symbols = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<password.length; i++){
        if(symbols.includes(password[i])){
            return true;
        }
    }
}
function hasLower(password){
    const symbols = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0; i<password.length; i++){
        if(symbols.includes(password[i])){
            return true;
        }
    }
}
function hasDigit(password){
    const symbols = "0123456789";
    for(let i=0; i<password.length; i++){
        if(symbols.includes(password[i])){
            return true;
        }
    }
}
function generateAndCheckPassword(length = 8) {
    let password;
    let message = prompt("Ви бажаєте згенерувати пароль або ввести власний?\nЗгенерувати - введіть 'g', Ввести - введіть 'e'", "g/e");
    if (message.toLowerCase() === 'g') {
        password = generatePassword(length);
        alert(`Згенерований пароль: ${password}`);
    } else if (message.toLowerCase() === 'e') {
        password = prompt("Введіть свій пароль:");
    } else {
        alert("Помилка!");
        return;
    }
    while(!hasUpper(password) || !hasLower(password) || !hasDigit(password)){
        alert("Пароль повинен містити принаймні одну велику літеру, одну малу літеру та одну цифру.");
        password = prompt("Введіть свій пароль:");
    }
    let confirmPassword = prompt("Введіть пароль для перевірки:");
    let check = checkPassword(password, confirmPassword);
    if (check) {
        alert("Паролі збігаються!");
    } else {
        alert("Паролі не збігаються!");
    }
}
generateAndCheckPassword(8);