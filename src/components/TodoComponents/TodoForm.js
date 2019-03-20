import React from 'react';
import { prependOnceListener } from 'cluster';

const TodoForm = () => {
    return (
        <form>
            <input value={props.task} />
            <button></button>
        </form>
    )
}