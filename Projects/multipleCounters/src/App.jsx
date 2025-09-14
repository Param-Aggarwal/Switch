import { useState } from 'react'

function App() {
  const initialList = [
    {id: 0, name: "counter0", value: 0},
    {id: 1, name: "counter1", value: 0},
    {id: 2, name: "counter2", value: 0},
  ]
  const [list, setList] = useState(initialList);
  
  const handleClick = (currentId) => {
    const newList = list.map(item => {
      return (
        item.id === currentId ? ({...item, value: item.value+1}) : item
      )
    })
    setList(newList);
    // console.log(`new value of counter id: ${item.id} is ${newVal}`)
  }

  return (
    <>
      <ul>List of counters:</ul>
      {list.map(item => {
        console.log("item is ---> ", item);
        return (
          <li key={item.id}> {item.value}
            <button onClick={() => handleClick(item.id)}>+1</button>
          </li>          
        )
      })}
    </>
  )
}

export default App
