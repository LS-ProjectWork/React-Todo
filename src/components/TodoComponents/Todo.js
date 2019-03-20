import React from 'react';

const Todo = props => {
    return (
        <div>
            <h3>{props.task}</h3>
            <h3>{props.completed}</h3>
            <h3>{props.id}</h3>
        </div>
    )
}

export default Todo