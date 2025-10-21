function backgroundColorChange() {
    let red = Math.floor(Math.random() * 255); 
    let blue = Math.floor(Math.random() * 255);
    let green =  Math.floor(Math.random() * 255);

    let body = document.querySelector('body'); 

    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`; 
}

let button = document.querySelector('button'); 

button.addEventListener('click', (e) => {
    e.preventDefault()
    backgroundColorChange()
})

