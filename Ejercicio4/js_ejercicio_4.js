const input = document.getElementById('input'); 
const list = document.getElementById('list'); 
const li = list.querySelectorAll('li');
const abc = 'abcdefghijlkmnopqrstuvwxyzABCDEFJGHIKLMNOPQRSTUVWXYZ'
let value = ''; 

input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
        value = value.split('')
        value.pop()
        value = value.join('')
        
    } else {
        if (abc.includes(e.key)) {
            value = value + e.key
        }
    }

    li.forEach(element => {
        elementText = element.innerText
        elementText = elementText.toLowerCase()

        if (elementText === value) {
            console.log(value) // hasta aqui se compara y se imprime por consola solo cuando la palabra está completa
        }
        
    });

}); 

