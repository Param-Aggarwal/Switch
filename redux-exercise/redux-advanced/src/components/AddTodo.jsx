import React from 'react';
import { useDispatch} from "react-redux";
import { addTodo } from '../Redux/Action';
import { useState } from 'react';


function AddTodo() {
    const dispatch = useDispatch();
    const [todo,setTodo] = useState("");
    // const todos = useSelector(todos);

    const handleClick = () => {
        todo && dispatch(addTodo(todo));
        setTodo("");
    }
    return (
        <>
            <div style={{margin: "20px 0", display: "flex", gap: "10px"}}>
                <label htmlFor='addTodo' >Enter your Todo here: </label>
                <textarea id='addTodo' rows="4" column="10" value={todo}
                    onChange={(e) => { setTodo(e.target.value) }} style={{ padding: "5px" }} />
                <button style={{ margin: "20px", padding: "0px 20px" }} onClick={handleClick}>Save</button>
            </div>
        </>
    );
}

export default AddTodo;