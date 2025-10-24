const task = document.getElementById("task"); 
const taskList = document.getElementById("task-list"); 
const deleteAll = document.getElementById("delete-all"); 
const deleteDone = document.getElementById("delete-done"); 
const addTask = document.getElementById("add-task"); 

function saveTask() {
    const tasks = []; 
    document.querySelectorAll('#task-list li').forEach(li => {
        tasks.push({
            text:li.textContent,
            completed: li.dataset.completed === "true"
        });
    });

    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}

function loadTasks() {
    const saved = localStorage.getItem('tasks'); 
    if (!saved) return;

    const tasks = JSON.parse(saved); 
    tasks.forEach(({ text, completed }) => {
        const newTask = document.createElement('li');
        newTask.dataset.completed = String(completed);
        const check = document.createElement('input'); 
        check.type = 'checkbox'
        check.checked = completed; 
        newTask.innerText = text; 
        newTask.appendChild(check)

        check.addEventListener('change', () => {
            newTask.dataset.completed = String(check.checked); 
            newTask.dataset.completed = check.checked; 
            newTask.style.textDecoration = "line-through";
            saveTask(); 
        });
        taskList.appendChild(newTask);
    });
}

loadTasks()

addTask.addEventListener('click', (e) => {
    e.preventDefault()
    const newTask = document.createElement('li')
    newTask.setAttribute("data-completed", false)
    const check = document.createElement('input');
    check.type = 'checkbox'

    newTask.innerText = task.value; 
    newTask.appendChild(check)

    check.addEventListener('change', () => {
       newTask.dataset.completed = check.checked; 
       newTask.style.textDecoration = "line-through"; 
       saveTask()
    });
    


    taskList.appendChild(newTask); 
    saveTask(); 
})

