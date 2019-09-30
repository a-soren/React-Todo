import React from 'react';


const Task=props=>{
    return(
        <div
        className={`task ${props.task.completed ? ' Completed':''}`}
        onClick={()=>{
            props.toggleToDo(props.task.id);
        }}
        >
            <p>{props.task.task}</p>
        </div>
    );
};

export default Task;