// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react"

function App() {
  // const todo = useRef();
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  // console.log("setTodoList is ------> ",setTodoList)

  const addTodo = () => {
    console.log("inside addTodo function");
    console.log("todo is ---------> ", todo)
    const newTodoList = [...todoList, todo];
    setTodoList(newTodoList);
    setTodo('');
    console.log("TodoList after insertion is -------> ", newTodoList)
  }
  const deleteTodo = (index) => {
    console.log("inside delete Todo function");
    const newTodoList = todoList.filter(todo => todo !== todoList[index])
    console.log(" after deltion ------------> ",newTodoList)
    setTodoList(newTodoList)
  }

  return (
    <>
      <div className="todoInput">
        <h1>Todo App</h1>
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTodo}> Click Me  </button >
      </div>
      <ul className="todoList">
        {todoList.map((todo, index) => {
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
