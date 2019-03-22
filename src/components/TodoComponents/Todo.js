import React from 'react';
import './Todo.css'
const Todo = props => {
    return (
        <div className={props.completed ? " completed" : ""} onClick={() => props.toggleTodo(props.id)}>
            <h3>{props.task}</h3>
            <h3>{props.completed}</h3>
            <h3>{props.id}</h3>
        </div>
    )
}

export default Todo