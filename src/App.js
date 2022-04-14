import logo from './logo.svg';
import './App.css';
import {useState} from 'react'


function App() {

  const [count, setCount] = useState(0);


  const increase = (connection) => {
    setCount(count + connection) 
  }
  const decrease = (connection) => {
    setCount(count - connection) 
  }
  return (
<div className="App">
      <p style={{backgroundColor: "grey",height:"2rem",fontSize:"20px",padding:"10px"}}>The value of the counter is {count}</p>
      <div className="incrementdecrement">
        <button onClick= {() => increase(1)} 
        style={{height:"3rem",margin:"2rem",borderRadius:"10px"}}>
        Increase By 1
      </button>
      <button onClick= {() => increase(5)}
      style={{height:"3rem",margin:"2rem",borderRadius:"10px"}}>
        Increase By 5
      </button>
      <button onClick= {() => increase(10)}
      style={{height:"3rem",margin:"2rem",borderRadius:"10px"}}>
        Increase By 10
      </button>
      <button onClick = {() => decrease(1)}
      style={{height:"3rem",margin:"2rem",borderRadius:"10px"}}>
        Decrease By 1
      </button>
      <button onClick = {() => decrease(5)}
      style={{height:"3rem",margin:"2rem",borderRadius:"10px"}}>
        Decrease By 5
      </button>
      <button onClick = {() => decrease(10)}
      style={{height:"3rem",margin:"2rem",borderRadius:"10px"}}>
        Decrease By 10
      </button>
      </div>
    </div>
  );
}

export default App;
