export const todos = []; 

export function createToDo(title, description, dueDate, priority, completed) {
    return {
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
        completed: completed
    };
}

export function addToDo(title, description, dueDate, priority, completed) {
    const newToDo = createToDo(title, description, dueDate, priority, completed);
    todos.push(newToDo);
    console.log(todos); 
    localStorage.setItem("localTask", JSON.stringify(todos));
}
