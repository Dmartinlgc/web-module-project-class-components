import React from 'react'

class Todo extends React.Component {
    constructor(){
        super()
        
    }
    render(){
        return (
            <div onClick = {() => this.props.toggleComplete(this.props.index)}> 
            {this.props.completed? (<strike>{this.props.task}</strike>):this.props.task}
            </div>    
            )
    }
}
export default Todo