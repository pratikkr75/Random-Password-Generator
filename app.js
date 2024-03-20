const passwordBox = document.getElementById("password");
const length = 15;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialCharacters = "@#$%^&*()_~|}{[]<>/-=";

const allChars = upperCase + lowerCase + number + specialCharacters;




function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += specialCharacters[Math.floor(Math.random() * specialCharacters.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)]
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.getSelection("copy");

    // Using modern clipboard API
    navigator.clipboard.writeText(passwordBox.value)
    .then(() => {
        alert('Password copied to clipboard');
    })
    .catch(err => {
        alert('Unable to copy password to clipboard. Please try again.');
        console.error('Error copying password to clipboard', err);
    });

}