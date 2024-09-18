import {} from "date-fns"

export function createToDo(title ,description, dueDate, priority,completed){
    return{
        title:title,
        description:description,
        dueDate:dueDate,
        priority:priority,
        completed:completed
    }

}


export function listdo(todos){
    for(let i=0;i<todos.length;i++){
        console.log(todos[i].title)
    }
}

