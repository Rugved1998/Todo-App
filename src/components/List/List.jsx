
import Task from "../Task/Task";

// const tasks=

export default function List({tasks, onDelete, onToggle}){

    return(
        <>
         {
            tasks.map((task)=>
                (
                    <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
                )
            )
         }       
        </>
    )
}