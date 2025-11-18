// import { useState } from 'react'
import Profile from "./profile"
import Theme from "./Theme"
import Settings from "./Settings"
import { useState } from "react"


function App() {
  const [pages, setPages] = useState(
    ["Profile", "Theme", "Settings"]
  );
  return (
    <>
      {pages.map((p,index) => {
        return (
            < span key={index} style={{ border: "1px solid black", padding: "2px 5px", margin: "2px" }}> {p}</span >
        )
      })}


    </>
  )
}

export default App
