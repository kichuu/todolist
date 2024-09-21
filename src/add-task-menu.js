import { addToDo } from "./todo";

export function todoinputdisplay() {
    const todolistcontainer = document.querySelector(".todo-list-container");
    todolistcontainer.innerHTML = `
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
        
        <label for="description">Description</label>
        <input type="text" id="description" name="description" />
        
        <label for="dueDate">Due Date</label>
        <input type="date" id="dueDate" name="dueDate" />
        
        <label for="priority">Priority</label>
        <input type="text" id="priority" name="priority" />
        
        <button id="submit-button" type="button">Add</button>
    `;

    const submitButton = document.getElementById("submit-button");
    if (submitButton) {
        console.log("test");
        submitButton.addEventListener("click", () => {
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priority").value;  
            addToDo(title, description, dueDate, priority, false); 
        });
    } else {
        console.error("Submit button not found. Make sure todoinputdisplay() has been called.");
    }
}
