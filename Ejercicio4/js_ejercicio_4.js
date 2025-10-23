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
        value = value.toLowerCase()
        

        for (let i = 0; i < value.length; i++) {
            if (value [i] !== elementText [i]){
                list.removeChild(element)
            }
        }
        
    });

}); 


