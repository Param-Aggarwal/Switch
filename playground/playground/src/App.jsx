import React from 'react';
import Dropdown from './Dropdown'; // Adjust path if necessary
import { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom"

function App() {
  const [input, setInput] = useState('');
  const prevTimer = useRef(null);

  useEffect(() => {
    console.log("App mounted")



    return (
      () => {
        if (prevTimer.current) {
          clearTimeout(prevTimer.current);                     // clearing prev timer if any
        }      
        console.log("App unmounting");
      })
  }, [])
  

  // const handleChange = (e) => {
  //   const input = e.target.value;
  //   setInput(input);
  //   console.log(`prev timer is --> ${ prevTimer }`);
  //   if (prevTimer.current) { clearTimeout(prevTimer.current); }      // clearing prev timer if any

  //   prevTimer.current = setTimeout(() => {
  //     console.log(`making api call for "${input}"`);       // Making network call here
  //   }, 500)
  // }

  return (
    <>
      <h3>This is app Component</h3>
      <input type="text"
        value={input}
        placeholder="Search here"
        style={{ padding: "8px 10px", width: "500px" }}
        onChange={(e) => setInput(e.target.value)}
      />
      <Outlet context={"this is context passed from parent App to its child"} />

    </>
  )
}

export default App;