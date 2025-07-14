// const initialItem = [
//     "param",
//     "aman",
//     "yogi",
//     "tailor",
//     "shahi"
//   ]
//   const [items, setItems] = useState(initialItem);

  // const handleLast = () => {
  //   const newItems = [...items,"singla"]
  //   setItems(newItems);
  // }
  // const handleFirst = () => {
  //   const newItems = ["singla",...items]
  //   console.log("newItems is -----> ",newItems)
  //   setItems(newItems);
  // }
  // const handleMid = () => {
  //   const midIndex = Math.floor(items.length / 2);
  //   const firstHalf = items.slice(0, midIndex);
  //   const secondHalf = items.slice(midIndex);
  //   const newItems = [...firstHalf,"mid",...secondHalf]
  //   setItems(newItems);
  // }

  // return (
  //   <>
  //     <ul>
  //       {items.map((item, index) => {
  //         return <li key={index}>
  //           {item}
  //         </li>
  //       })}
  //     </ul>
  //     <button onClick={handleLast}>Add to the last</button>
  //     <button onClick={handleFirst}>add to the first</button>
  //     <button onClick={handleMid}>Add in the middle</button>
  //   </>
  // )




//   ----------------------------------------



  // const nameId = useId();
  // const ageId = useId();
  // const contactId = useId();
  // const emailId = useId();

  // const name = useRef();
  // const age = useRef();
  // const contact = useRef();
  // // const email = useRef();
  // const [email, setEmail] = useState("");
  

  // // return (
  // //   <>
  // //       <h1>Hello World</h1>vvfv
  // //       <label htmlFor={nameId}>Name: </label>
  // //       <input id={nameId} type="text" ref={name} /> 
        
  // //       <label htmlFor={ageId}>Age: </label>
  // //       <input id={ageId} type="text" ref={age} />
        
  // //       <label htmlFor={contactId}>Number: </label>
  // //       <input id={contactId} type="number" ref={contact} />
        
  // //       <label htmlFor={emailId}>Email: </label>
  // //       <input id={emailId} type="text" value={email}
  // //         onChange={(e) => {
  // //         setEmail(e.target.value)
  // //       }} 
  // //       />
  // //       {/* <input id={emailId} type="text" ref={email} /> */}

  // //       <button onClick={() => {
  // //         console.log("Button Clicked!!")
  // //         console.log("----------> NAME ",name)
  // //         console.log("----------> AGE ",age)
  // //         console.log("----------> CONTACT ",contact)
  // //         console.log("------------>EMAIL ",emailId);
  // //       }}>Click Me</button>
      
  // //   </>
  // // )
