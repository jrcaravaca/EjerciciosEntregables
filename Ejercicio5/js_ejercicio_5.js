const numberOne = document.getElementById('number-one'); 
const numberTwo = document.getElementById('number-two'); 
const result = document.getElementById('result'); 
const buttons = document.querySelectorAll('button'); 

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault()
        calculator(numberOne.value, numberTwo.value, button.dataset.op)
    });
});

function calculator(num1, num2, op) {
    if (num1 === "" || num2 === "") {
        result.value = 'Debes introducir dos números'
    } else {
        if (op === 'sum') {
            result.value = parseInt(num1) + parseInt(num2);
        } else if (op === 'subs'){
            result.value = parseInt(num1) - parseInt(num2);
        } else if (op === 'power') {
            result.value = parseInt(num1) * parseInt(num2);
        } else {
            if (num2 === '0') {
                result.value = 'No se puede dividir entre 0'
            } else {
                result.value = parseInt(num1) / parseInt(num2);
            }
        }
    }
}

