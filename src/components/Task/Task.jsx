
import { FaTimes } from "react-icons/fa";



function getTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
  };


export default function Task({task,onDelete,onToggle}){
const sysdate=getTodayDate();
return(
<div className={`task ${task.reminder?"reminder":" "}`} onDoubleClick={()=>onToggle(task.id)}>
<h3>{task.text} {(sysdate>task.date)?<span style={spanStyle}>Task overdue</span>:(``)}<FaTimes style={closeIconStyle} onClick={()=>onDelete(task.id)}/></h3>
<p>{task.date}</p>

</div>)

}

const closeIconStyle={
color:"red",
cursor:"pointer"
}

const spanStyle={
    color:"orange"
}