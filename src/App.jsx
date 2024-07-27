// import logo from './logo.svg';
// import './App.css';
import React,{useEffect, useState} from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Header from './components/Header/Header';
import List from './components/List/List';
import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer/Footer";
import About from './components/About/About'
// import Task from './components/Task/Task';


function App() {
  const[formToggle,setFormToggle]=useState(false);
  const [tasks,setTasks]=useState([]);
useEffect(()=>{
  const getData=async()=>{
    const dataFromServer= await fetchTasks();
    setTasks(dataFromServer);
  }
  getData();
},[]);

// Fetch Tasks from json server
async function fetchTasks(id){
  const res= await fetch('http://localhost:5000/tasks');
  const data= await res.json();
  return data;
}

// Fetch Tasks from json server
async function fetchTask(id){
  const res= await fetch(`http://localhost:5000/tasks/${id}`);
  const data= await res.json();
  return data;
}



//Add Task

async function addTask(task){
    // console.log({text,day,reminder});
    // let id=tasks.length+1
    // const newTask={id, ...data};

    // setTasks([...tasks,newTask]);

  const res=await fetch('http://localhost:5000/tasks',{
    method:'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(task),
  });

  const data = await res.json();

  setTasks([...tasks, data]);

}

// Form Toggle

// function toggleForm(){
//   setFormToggle(!formToggle);
// }

// Delete Task

async function deleteTask(id) {
  const res = await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'DELETE',
  })

  //Checking if any error in the connection
  res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task');
  
}

//Toggle Reminder

async function toggleReminder(id){
  const toggleTask= await fetchTask(id);
  const tempTask= {...toggleTask,reminder:!toggleTask.reminder};
  const res=await fetch(`http://localhost:5000/tasks/${id}`,{
    method:'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(tempTask),
  });

  const data =await res.json();
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:data.reminder}: task));


  
 
}

  return (
    <Router> 
    <div className="container">
      
      <Header onToggle={()=>(setFormToggle(!formToggle))} formMode={formToggle}/>
      <Routes>
      <Route path='/'  element={
        <>
        {formToggle&&<AddTask onAdd={addTask}/>}
      
      {tasks.length>0 ? (<List tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />):("No Tasks Available")}
        </>
      }/>
      <Route path='/about' element={<About />}/>
      </Routes>
    <Footer/>
    </div>
    </Router>
  );

}

export default App;
