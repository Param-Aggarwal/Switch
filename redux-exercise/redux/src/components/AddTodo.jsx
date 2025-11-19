import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/action"
import { useState } from "react";

const AddTodo = () => {
    const dispatch = useDispatch();
    const [todo, setTodo] = useState("");

    return <div>
        {/* This is Add Todo function */}
        <label htmlFor="add-todo">Enter Text here</label>
        <input id="add-todo" type="text" onChange={(e) => setTodo(e.target.value)} value={todo} />
        <button onClick={() => {
            if (!todo) return;
            dispatch(addTodo(todo))
            setTodo("");
        }}>Add</button>
    </div>
}

export default AddTodo;