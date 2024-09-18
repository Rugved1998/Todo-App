import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from './firebase';  // import the initialized Firebase Firestore
import Header from './components/Header/Header';
import List from './components/List/List';
import AddTask from "./components/AddTask/AddTask";
import Footer from "./components/Footer/Footer";
import About from './components/About/About';

function App() {
  const [formToggle, setFormToggle] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchTasks();
      setTasks(dataFromServer);
    }
    getData();
  }, []);

  // Fetch Tasks from Firebase
  async function fetchTasks() {
    const taskCollection = collection(db, 'tasks');
    const taskSnapshot = await getDocs(taskCollection);
    const taskList = taskSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    return taskList;
  }

  // Fetch Task by id from Firebase
  async function fetchTask(id) {
    const taskRef = doc(db, 'tasks', id);
    const taskSnap = await getDocs(taskRef);
    return taskSnap.exists() ? taskSnap.data() : null;
  }

  // Add Task
  async function addTask(task) {
    const taskRef = await addDoc(collection(db, 'tasks'), task);
    setTasks([...tasks, { ...task, id: taskRef.id }]);
  }

  // Delete Task
  async function deleteTask(id) {
    await deleteDoc(doc(db, 'tasks', id));
    setTasks(tasks.filter((task) => task.id !== id));
  }

  // Toggle Reminder
  async function toggleReminder(id) {
    const toggleTask = await fetchTask(id);
    if (toggleTask) {
      const taskRef = doc(db, 'tasks', id);
      await updateDoc(taskRef, { reminder: !toggleTask.reminder });
      setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !toggleTask.reminder } : task));
    }
  }

  return (
    <Router>
      <div className="container">
        <Header onToggle={() => setFormToggle(!formToggle)} formMode={formToggle} />
        <Routes>
          <Route path='/' element={
            <>
              {formToggle && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (<List tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : ("No Tasks Available")}
            </>
          } />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
