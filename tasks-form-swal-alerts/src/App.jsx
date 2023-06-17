import Form from "./components/Form"
import { useEffect, useState } from "react";
import Tasks from "./components/Tasks";
import Swal from 'sweetalert2'

const initialStateTasks = JSON.parse(localStorage.getItem('tasks')) || [];

const App = () => {

  const [tasks, setTasks] = useState(initialStateTasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = task => {
    setTasks([...tasks,task]);
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
  };

  const deleteTask = taskToDelete => {
    const newTasks = tasks.filter((task) => (task != taskToDelete))
    setTasks (newTasks);
  }
  
  const updateTask = taskToUpdate => {
    taskToUpdate.state = (taskToUpdate.state) ? false : true;
    const newTasks = tasks.map(task => (task != taskToUpdate) ? task : taskToUpdate)
    setTasks (newTasks);
  }

  const orderTasks = tasks => {
    return tasks.sort((a,b) => {
      if(a.priority) return -1;
      if(!a.priority) return 1;
      return 0;
    });
  }

  return (
    <div className='container mb-2'>
      <h1 className='my-5'>Forms!</h1>      
      <Form addTask={addTask}/>
      <Tasks 
        tasks={orderTasks(tasks)} 
        deleteTask={deleteTask} 
        updateTask={updateTask}
      />
    </div>
  )

}
export default App
