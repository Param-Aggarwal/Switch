// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useRef, useState } from "react"

function App() {
  const inputRef = useRef("");
  // const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  
  const addTodo = () => {
    const todo = inputRef.current.value.trim();
    console.log("todo is --> ",todo)
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    inputRef.current.value= "";
    // setTodo('');
  }
  const deleteTodo = (index) => {
    const newTodoList = todoList.filter((todo,i) => i !== index)
    setTodoList(newTodoList)
  }

  return (
    <>
      <div className="todoinputRef">
        <h1>Todo App</h1>
        <input type="text" ref={inputRef} placeholder="Enter todo here" autoFocus tabIndex={0}
          onKeyUp={e => { e.key === "Enter" && document.getElementById("add-btn")?.click() }}
        />  
        <button id="add-btn"
          onClick={() => { inputRef.current.value.trim() !== "" && addTodo() }}
          // onKeyUp={e => {
          //   e.key === "Enter" && addTodo;
          // }}
         > Click to add! </button >
      </div>
      <ul className="todoList">
        {todoList.map((todo,index) => {
          return (
            <li key={index}> {todo}
            <button onClick={() => deleteTodo(index)}> Delete </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
