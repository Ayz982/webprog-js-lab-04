/*function generatePassword(length){
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
function generateAndCheckPassword(length = 8) {
    let password = generatePassword(length);
    let message = confirm("Ви бажаєте побачити згенерований пароль?");
    if (message) {
        alert(password);
    }
    let confirmPassword = prompt("Введіть свій пароль для перевірки:");
    let check = checkPassword(password, confirmPassword);
    if (check) {
        alert("Паролі збігаються!");
    } 
    else {
        alert("Паролі не збігаються!");
    }
}

generateAndCheckPassword(8);*/