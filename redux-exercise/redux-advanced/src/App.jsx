import { useSelector } from "react-redux";
import AddTodo from "./components/AddTodo"
import TodoList from "./components/TodoList"
import ToogleTheme from "./components/ToogleTheme"

function App() {

  const theme = useSelector(state => state.theme);

  return (
    <div style={{ backgroundColor:  theme=== "light" ? "white": "grey" }}>
      <ToogleTheme />
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
