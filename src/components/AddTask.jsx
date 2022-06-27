import React from 'react';
import { useState , handleTaskAddition } from 'react';
import './AddTask.css';
import Button from './Button';


const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) =>{
        console.log(e.target.value);
        setInputData(e.target.value);
    }
    
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData)
    }

    return ( 
        <div className='add-task-container'>

            <input 
            onChange={handleInputChange} 
            value={inputData}
            className="add-task-input " 
            type="text" 
            />
            ;
            <div className="add-task-button-container"></div>
            <Button onClick={handleAddTaskClick} > Add Movie</Button>
        </div>
        
     );
}
 
export default AddTask;