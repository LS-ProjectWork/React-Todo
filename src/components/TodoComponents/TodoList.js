import React from 'react';
import Todo from './Todo'

const TodoList = props => {
    return (
        <div>
            {props.todos.map(todo => {
                return <Todo key={todo.id} task={todo.task} completed={todo.completed} id={todo.id} />
            })}
        </div>
    )
}

export default TodoList