import { useId,useRef,useState } from 'react'

function App() {
  const nameId = useId();
  const ageId = useId();
  const contactId = useId();
  const emailId = useId();

  const name = useRef();
  const age = useRef();
  const contact = useRef();
  // const email = useRef();
  const [email,setEmail] = useState("");
  
  return (
    <>
      <h1>Hello World</h1>
      <label htmlFor={nameId}>Name: </label>
      <input id={nameId} type="text" ref={name} /> 
      
      <label htmlFor={ageId}>Age: </label>
      <input id={ageId} type="text" ref={age} />
      
      <label htmlFor={contactId}>Number: </label>
      <input id={contactId} type="number" ref={contact} />
      
      <label htmlFor={emailId}>Email: </label>
      <input id={emailId} type="text" value={email}
        onChange={(e) => {
        setEmail(e.target.value)
      }} 
      />
      {/* <input id={emailId} type="text" ref={email} /> */}

      <button onClick={() => {
        console.log("Button Clicked!!")
        console.log("----------> NAME ",name)
        console.log("----------> AGE ",age)
        console.log("----------> CONTACT ",contact)
        console.log("------------>EMAIL ",emailId);
      }}>Click Me</button>
      
    </>
  )
}

// import { useState } from 'react';

// function App() {
//   const [names, setNames] = useState(["Alice", "Bob", "Carol"]);

//   const removeFirst = () => {
//     setNames(names.slice(1));
//   };

//   return (
//     <>
//       {names.map((name, i) => (
//         <div key={i}>
//           <input defaultValue={name} />
//         </div>
//       ))}
//       <button onClick={removeFirst}>Remove First</button>
//     </>
//   );
// }

export default App
