import { useState } from 'react'


function App() {
    // let countval=10
    let [Count,setCount]=useState(10)
    const addval=()=>{
      setCount(Count+1)
      if(Count===20){
       setCount(20)
      } 
      
    }
    const removeval=()=>{
      setCount(Count-1)
      if(Count<=  0)         setCount(0);

      
    }

  return (
    <>
    <h3>Counter:{Count}</h3>
     <button onClick={addval}>IncreaseValue</button>
     <br />
     <button onClick={removeval}>DecreaseValue</button>
    </>
  )
}

export default App
