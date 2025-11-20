import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, starTodo } from '../Redux/Action';

function Todo({todo}) {
    const dispatch = useDispatch();

    return (
        <div style={{ display: "flex", gap: "10px"}}>
            <span style={{ width: "150px", overflow: "hidden", textOverflow: "ellipsis" }}>
                {todo.text}
            </span>
            <span onClick={() => dispatch(starTodo(todo.id))}>*</span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </div>
    );
}

export default Todo;