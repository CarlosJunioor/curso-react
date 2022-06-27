import React from 'react';
import "./Task.css";

const Task = ({task}) => {
    return <div className='task-container'>
        {task.id+task.title+task.completed}

    </div>;
}
 
export default Task;