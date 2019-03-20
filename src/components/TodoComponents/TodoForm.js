import React from 'react';
import { prependOnceListener } from 'cluster';

const TodoForm = props => {
    return (
        <form>
            <input value={props.task} />
            <button></button>
        </form>
    )
}