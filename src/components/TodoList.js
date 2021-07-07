import React from 'react'
import Todo from './Todo'
class TodoList extends React.Component {
    constructor(){
        super()
        
    }
    render(){
        return (
            <div> 
              {this.props.tasks.map((item, index) => (
            <Todo toggleComplete = {this.props.toggleComplete} index = {index} task = {item.task} completed = {item.completed} />
              ))}    
            </div>    
            )
    }
}
export default TodoList