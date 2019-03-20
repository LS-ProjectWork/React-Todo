import React from 'react';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const TodoForm = props => {
    return (
        <form onSubmit={props.handleAdd}>
            <input value={props.inputValue} onChange={props.handleChange} />
            <button type="submit">Add Todo</button>
            <button onClick={props.handleClear}>ClearCompleted</button>
        </form>
    )
}

export default TodoForm;