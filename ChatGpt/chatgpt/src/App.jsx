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
      <input id={inputId}
        placeholder=" Type Here !!"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="border border-black-100 pt-1 pl-1 pr-6 pb-5 rounded"
      />
      <button onClick={handleClick}>
        Search 
      </button>
    </>
  )

}

export default App
