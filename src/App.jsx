import { TaskList } from "./Components/TaskList";
import { Taskform } from "./Components/Taskform";
import { ProgressTracker } from "./Components/ProgressTracker";
import React, { useEffect } from 'react'        


function App() {  

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
   });

  const [tasks, setTasks] = React.useState([]);

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  return (
    <>
    <h1>Daily Tasks Manager</h1>
    <p>Hello, from your friendly tasks manager buddy!</p>
    <Taskform addTask ={addTask} />
    <TaskList />
    <ProgressTracker />
    <button>Clear All Tasks</button>
    </>
  )
}
export default App;