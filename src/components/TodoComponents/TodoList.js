// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from '../TodoComponents/Todo.js';


const TodoList=props=>{
    return (
        <div className='Todo-List'>
            {props.todo.map(task=>(
                <Task key={task.id} task={task} toggleToDo={props.toggleToDo}/>
            ))}
            <button className='clear-form' onClick={props.clearCompleted}>Clear Completed Tasks</button>
        </div>
    );
};

export default TodoList;