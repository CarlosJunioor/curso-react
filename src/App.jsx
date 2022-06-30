import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css'
import AddTask from './components/AddTask';
import Header from './components/Header';
import Tasks from './components/Tasks';

const App = () => {
  // let message = "Hello World!";
  const [tasks, setTasks] = useState([
    {
      id: 'Filme 1',
      title: 'SpiderMan',
      completed: false,
    },
    {
      id: 'Filme 2',
      title: 'Superman',
      completed: true,
    }
  ]); // this is where the magic happens

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter( (task) => task.id !== taskId)
    
    setTasks(newTasks)
  }

  const handleTaskClick = (taskId) => {
  const newTasks = tasks.map(task => {
    if (task.id == taskId) return { ... task, completed: !task.completed};

    return task;
  });

  setTasks(newTasks)
  };

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTasks);

  };

  return (
    <Router>
    <div className="container">
      <Header/>
      <AddTask handleTaskAddition={handleTaskAddition} />
      <Tasks tasks={tasks} 
      handleTaskClick={handleTaskClick} 
      handleTaskDeletion={handleTaskDeletion}
      />
     
      
      
        
      
      </div>
    </ Router>
  );
};


export default App;