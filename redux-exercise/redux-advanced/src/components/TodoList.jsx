import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';


function TodoList() {
    const todos = useSelector(state => state.todos);

    return (
        <>
            <h4>This is todos List</h4>
            <ul>

            {todos.map((todo,index) => {
                return (
                    <li key={index} >
                        <Todo todo={todo} />
                    </li>
                )
            })}
            </ul>
        </>
    );
}

export default TodoList;