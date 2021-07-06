import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state ={
      tasks: []
    }
    this.toggleComplete = this.toggleComplete.bind(this);
  }
  componentDidMount(){
    this.setState({
      tasks: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: true
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    })
  }

toggleComplete(index){
this.setState((state)=>{
  console.log(state);
  console.log(index);
  const newTask = [...state.tasks]
  newTask[index].completed = !newTask[index].completed 
  return({
    tasks: [...newTask]
  })

})  
}

  render() {
    return (
      <div>
        <TodoForm/>
        <TodoList toggleComplete = {this.toggleComplete} tasks = {this.state.tasks}/>
        <h2>Welcome to your Todo App!</h2>
      </div>
    );
  }
}

export default App;
