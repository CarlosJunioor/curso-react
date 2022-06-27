import React, { useState } from 'react';
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

  return (
    <>
    <div className="container">
      <AddTask />
      <Tasks tasks={tasks}/>

      </div>
    </>
  );
}

export default App;