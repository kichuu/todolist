import "./styles.css";
import { todoinputdisplay } from "./add-task-menu";
import { loadTasks, renderTasks } from "./tasklist";

document.addEventListener("DOMContentLoaded", () => {
    const addTaskButton = document.querySelector(".add-task"); 

        addTaskButton.addEventListener("click", () => {
            todoinputdisplay(); 
        });
    } 
);

document.addEventListener("DOMContentLoaded", () => {
    const displayTasksButton = document.getElementById("display-tasks-button");
        displayTasksButton.addEventListener("click", () => {
            const tasks = loadTasks(); 
            renderTasks(tasks); 
        });
    } 
);


document.addEventListener("DOMContentLoaded", () => {
    const taskListContainer = document.querySelector(".todo-list-container");
    taskListContainer.addEventListener("click", (event) => {
        if (event.target.classList.contains("task-complete")) {
            const taskItem = event.target.closest(".task-item");
            if (taskItem) {
                console.log("Task completed!");
                taskItem.innerHTML = "Task Complete"; 
            }
        }
    });
});
