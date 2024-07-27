// import logo from './logo.svg';
// import './App.css';
import React,{useState} from "react";

import Header from './components/Header/Header';
import List from './components/List/List';
import AddTask from "./components/AddTask/AddTask";
// import Task from './components/Task/Task';


function App() {
  const[formToggle,setFormToggle]=useState(false);
  const [tasks,setTasks]=useState([{
    id:1,
    text: "Visit Bank",
    day:'10 Jul 2024',
    reminder:true
},
{
    id:2,
    text: "Go To Hospital",
    day:'13 Jul 2024',
    reminder:true
},
{
    id:3,
    text: "Book tickets for Indian 2",
    day:'19 Jul 2024',
    reminder:true
}
]);


//Add Task

function addTask(data){
    // console.log({text,day,reminder});
    let id=tasks.length+1
    const newTask={id, ...data};

    setTasks([...tasks,newTask]);
}

// Form Toggle

// function toggleForm(){
//   setFormToggle(!formToggle);
// }

// Delete Task

function deleteTask(id){
  setTasks(tasks.filter((task)=>(task.id!==id)));
}

//Toggle Reminder

function toggleReminder(id){
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}: task));
}

  return (
    <div className="container">
      
      <Header onToggle={()=>(setFormToggle(!formToggle))} formMode={formToggle}/>
      {formToggle&&<AddTask onAdd={addTask}/>}
      
      {tasks.length>0 ? (<List tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />):("No Tasks Available")}
    </div>
  );
}

export default App;
