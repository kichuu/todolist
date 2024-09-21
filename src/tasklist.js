export function loadTasks() {
    const storedTasks = localStorage.getItem("localTask");
    return storedTasks ? JSON.parse(storedTasks) : [];
}

export function renderTasks(tasks) {
    const taskListContainer = document.querySelector(".todo-list-container");
    taskListContainer.innerHTML = ""; 

    tasks.forEach(task => {
        const taskItem = document.createElement("div");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <p>Due: ${task.dueDate}</p>
            <p>Priority: ${task.priority}</p>
            <p>Completed: ${task.completed}</p>
        `;
        taskListContainer.appendChild(taskItem);
    });
}