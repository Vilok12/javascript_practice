import React from 'react'
import Addtask from './Addtask'
import Listtask from './Listtask'
import Counttask from './Counttask'
import { useState } from "react"

function Taskmanager() {
    let [tasks,settasks]=useState([])
    const addnewtask = (taskobj) => {
    const newTask = {
      id: Date.now(),              
      taskname: taskobj.taskname,
      priority: taskobj.priority,
      completed: false           
    };
    settasks([...tasks, newTask]);
  };
    const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }: task);
      settasks(updatedTasks);
    };
    const deletetask=(id)=>{
      const updatedTasks=tasks.filter((task)=>
      task.id!==id)
      settasks(updatedTasks);
    }



  return (
    <div className='text-center bg-blue-300 mb-10 '>
        <h3 className='text-4xl mb-10 text-amber-700 font-bold '>Task Manager</h3>
        <div className='flex text-center justify-around'>
         <Addtask  addnewtask={addnewtask}/>
         <Listtask tasks={tasks} toggleComplete={toggleComplete} deletetask={deletetask}/>
         <Counttask  tasks={tasks}/>
        </div>

    </div>
   
 
  )
}

export default Taskmanager