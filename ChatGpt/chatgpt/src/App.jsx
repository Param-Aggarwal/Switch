import { useId,useState } from 'react'
import Sidebar from './Sidebar'

function App() {
  const inputId = useId();
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    console.log("You searched for --------> ", inputValue)
    
  }
  return (
    <>
      <Sidebar className="flex flex-row" />
      <h1>Welcome to ChatGPT</h1>
      <label htmlFor={inputId}>  </label>
      <input type="text"
        value={inputValue}
        placeholder="Search here"
        style={{ padding: "8px 10px", width: "500px" }}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleClick}
        style={{ padding: "8px 10px"}}>
        O
      </button>
    </>
  )

}

export default App
