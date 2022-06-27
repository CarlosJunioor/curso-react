import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import AddTask from './components/AddTask';
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

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false,
    }]
    setTasks(newTasks);

  };

  return (
    <>
    <div className="container">
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks}/>

      </div>
    </>
  );
}

export default App;