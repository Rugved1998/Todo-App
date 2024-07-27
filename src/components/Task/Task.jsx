import React from "react";
import { FaTimes } from "react-icons/fa";

export default function Task({task,onDelete,onToggle}){
return(
<div className={`task ${task.reminder?"reminder":" "}`} onDoubleClick={()=>onToggle(task.id)}>
<h3>{task.text} <FaTimes style={closeIconStyle} onClick={()=>onDelete(task.id)}/></h3>
<p>{task.day}</p>

</div>)

}

const closeIconStyle={
color:"red",
cursor:"pointer"
}