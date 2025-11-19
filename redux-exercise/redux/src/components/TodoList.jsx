import { useDispatch, useSelector } from "react-redux";
import {deleteTodo } from "../Redux/action";
import AddTodo from "./AddTodo";

const TodoList = () => {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    return <>
        <AddTodo />
        <h4> this is TodoList Component and below is list of todos: </h4>

        <ul>

        {todos.map((todo) => {
            return (
                <li key={todo.id}> {todo.text}
                    <button onClick={() => {
                        dispatch(deleteTodo(todo.id))
                    }}> Delete </button>
                </li>
            ); 
        })}
        </ul>
    </>
}

export default TodoList;