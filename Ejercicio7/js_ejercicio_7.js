const lower = "abcdefjhijlkmnoprqstuvwkyz"; 
const upper = "ABCDEFJHIJKLMNOPQRSTUVWKYZ"; 
const special = "$%&€@#+Ç";
const numbers = "1234567890"; 

const input = document.getElementById('password-length'); 
const button = document.querySelector('button'); 
const password = document.getElementById('password');

const caracterAleatorio = () => {
    let random = Math.ceil(Math.random() * 12);
    let caracter = "";
    
    if (random === 1 || random === 5 || random === 9) {
        caracter = lower[Math.ceil(Math.random() * (lower.length - 1))]; 
    } else if (random === 2 || random === 6 ||random === 10) {
        caracter = upper[Math.ceil(Math.random() * (upper.length - 1))]; 
    } else if (random === 3 || random === 7 ||random === 11) {
        caracter = special[Math.ceil(Math.random() * (special.length - 1))]; 
    } else if (random === 4 || random === 6 ||random === 12) {
        caracter = numbers[Math.ceil(Math.random() * (numbers.length - 1))]; 
    }

    return caracter; 
}

button.addEventListener('click', e => {
    e.preventDefault()
    plength = parseInt(input.value) || 0; 
    randomPassword = ""; 

    if (plength === 0 || plength < 4) {
        password.innerText = "La longitud debe ser mayor o igual a 4"
        return
    } else {
        for (let i = 0; i < plength; i++) {
            randomPassword += caracterAleatorio(); 
        }
    }

    password.innerText = randomPassword; 
})