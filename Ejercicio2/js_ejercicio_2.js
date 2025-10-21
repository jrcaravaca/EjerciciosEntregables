const button = document.querySelector('button'); 
const counterText = document.getElementById('counter'); 
let counter = 0; 

button.addEventListener('click', (e) => {
    e.preventDefault(); 
    counter +=1
    counterText.innerHTML = `Clics: ${counter}`
})