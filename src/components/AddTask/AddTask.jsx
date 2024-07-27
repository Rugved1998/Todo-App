import  { useState } from "react";

export default function AddTask({onAdd}){
    const [text,setText]=useState('');
    const [date,setDate]=useState(new Date());
    const [reminder,setReminder]=useState(false);

    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
      };


    function onSubmit(e){
        e.preventDefault();

        if(!text){
            alert("Please fill the Task field");
            return
        }

        onAdd({text,date,reminder});

        setText(' ');
        setDate(new Date());
        setReminder(false);

    }


    return(
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
            <label>Task</label>
            <input type="text" placeholder="Add Task"
            value={text} onChange={(e)=>setText(e.target.value)}  />
            </div>

            <div className="form-control">
            <label>Date </label>
            <input type="date" placeholder="Add Day and Time"
            value={date} onChange={(e)=>setDate(formatDate(e.target.value))} />
            </div>

            <div className="form-control form-control-check">
            <label>Reminder</label>
            <input type="checkbox"  checked={reminder}
            value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/> 
        </form>
    );
}