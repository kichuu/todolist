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

    if (displayTasksButton) {
        displayTasksButton.addEventListener("click", () => {
            const tasks = loadTasks(); 
            renderTasks(tasks); 
        });
    } else {
        console.error("Display Tasks button not found.");
    }
});