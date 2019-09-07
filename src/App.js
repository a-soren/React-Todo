import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm.js';
import TodoList from './components/TodoComponents/TodoList.js';




const todo=[
  {
    task:'Organize Garage',
    id:123,
    completed: false
  },
  {
    task:'Clean bathroom',
    id:124,
    completed:false
  },
  {
    task:'Family Pictures',
    id:125,
    completed:false
  },
  {
    task:'Sign Field Trip Slip',
    id:126,
    completed:false
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state={
      todo
    };
  }

  toggleToDo = taskId =>{
    this.setState({
      todo: this.state.todo.map(task=>{
        if (task.id===taskId){
          return {...task, completed: !task.completed}
        }
        return  task;
      })
    });
  };

  addTodo = task=>{
    const id=this.state.todo[this.state.todo.length-1].id+1
    const newTask={task,id,completed:false}
    const todoNewArray=[...this.state.todo,newTask]
    this.setState({todo:todoNewArray})
  }

  clearCompleted=(e)=>{
    e.preventDefault();
    this.setState({
      todo: this.state.todo.filter(task=>!task.completed)
    })
  }

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  render() {
    console.log('Rendering...');
    console.log(this.state.todo);
    return (
      <div className='App'>
        <div className='Header'>
          <h2>To Do:</h2>
          <TodoForm 
           addTodo={this.addTodo} />
        </div>
        <TodoList 
        todo={this.state.todo}
        toggleToDo={this.toggleToDo}
        clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
