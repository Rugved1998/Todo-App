import { useState } from "react";

export default function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    function formatDateForDisplay(date) {
        const d = new Date(date);
        const day = String(d.getDate()).padStart(2, '0');
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const year = d.getFullYear();
        return `${day}-${month}-${year}`;
    }

    function formatDateForInput(date) {
        const d = new Date(date);
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function parseDateFromInput(dateString) {
        const [year, month, day] = dateString.split('-');
        return new Date(`${year}-${month}-${day}`);
    }

    function onSubmit(e) {
        e.preventDefault();

        if (!text) {
            alert("Please fill the Task field");
            return;
        }

        onAdd({ text, date: formatDateForDisplay(date), reminder });

        setText('');
        setDate('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task"
                    value={text} onChange={(e) => setText(e.target.value)} />
            </div>

            <div className="form-control">
                <label>Date</label>
                <input type="date" 
                    value={formatDateForInput(date)} 
                    onChange={(e) => setDate(parseDateFromInput(e.target.value))} />
            </div>

            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" checked={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block" />
        </form>
    );
}
