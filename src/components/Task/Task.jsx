import { FaTimes } from "react-icons/fa";

function getTodayDate() {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0'); // getMonth() is zero-based
    const year = today.getFullYear();
    return `${day}-${month}-${year}`;
}

function parseDate(dateString) {
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`);
}

export default function Task({ task, onDelete, onToggle }) {
    const sysdate = getTodayDate();
    const sysDateObj = parseDate(sysdate);
    const taskDateObj = parseDate(task.date);
    const isOverdue=sysDateObj > taskDateObj;

    return (
        <div className={`task ${isOverdue ? "overdue" : (task.reminder ? "reminder" : " ")}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text}
                {isOverdue? <span className="overdue-text">Task overdue</span> : (``)}
                <FaTimes className="close-icon" onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.date}</p>
        </div>
    );
}



