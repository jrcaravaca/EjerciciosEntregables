const input = document.getElementById('input-text'); 
const button = document.getElementById('button')
const ul = document.getElementById('list'); 

function addElement() {
    let value = input.value; 
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar'
    li.innerText = value; 
    li.appendChild(deleteButton)

    deleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        ul.removeChild(li)        
    })

    ul.appendChild(li)
}

button.addEventListener('click', (e) => {
    e.preventDefault(); 
    addElement()
})