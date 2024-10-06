import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  function  onStartClick(){
    setInterval(() => {
      setCount(count => count+1);
    },1000)
  }

  function onStopClick(){

  }

  function onResetClick(){
    
  }

  return (
    <div className='container'>
      <div className='display'>{count}</div>
      <div className='buttons'>
        <button className='start' onClick={onStartClick}>Start</button>
        <button className='stop'  onClick={onStopClick}>Stop</button>
        <button className='reset' onClick={onResetClick}>Reset</button>
      </div>
    </div>
  )
}

export default App
