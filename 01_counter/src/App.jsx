import { useState } from 'react'


function App() {
  let [count, setCount] = useState(1)
  let addValue = () => {
    if(count >=20){
      return count = 1;
    }
    else{
     console.log('count', count, Math.random())
    setCount(count + 1)
  }
  }
   let removevalue = () => {
    if(count <=0){
      return 0;
    }
    else{
     console.log('count', count, Math.random())
    setCount(count - 1)
  }
   }
  return (
    <>
     <h1> lets count the numbers </h1>
     <h2> count the number: {count}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button onClick={removevalue}>Remove Value</button>  
    </>
  )
}

export default App
