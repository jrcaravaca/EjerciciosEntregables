const words = document.getElementById('words'); 
const letters = document.getElementById('letters'); 
const text = document.querySelector('textarea'); 
let letterCounter = 0; 

text.addEventListener('input', (e) =>  {
    const value = text.value; 

    const wordCount = value.trim().split(/\s+/).filter(Boolean);
    words.textContent = wordCount.length; 

    const chars = value.replace(/[\s\n\r]/g, '');
    letters.textContent = chars.length; 
})