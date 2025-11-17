import { useRef , useState, useEffect } from 'react';
import './App.css';
const  App = () => {
  const [ count ,setCount ] = useState(0);
  const [ start , setStart] = useState(false);
  const timer = useRef(null);
  
  const StartCount = () => {
    if(start) return ;
    setStart(true);

    let value = setInterval(()=>{
      setCount(t=>t+1)
    },1000)
    timer.current = value;
  }

  const StopCount = () => {
    setStart(false);
    clearInterval(timer.current);
  }

  const ResetCount = () => {
    setStart(false);
    clearInterval(timer.current);
    setCount(0);
  }

  useEffect(()=>{
      return () => clearInterval(timer.current);   //Unmounting 
  },[])

  return (
    <div className="wrapper">
      <div className="timer-box">
        <h1 className="display">{count}</h1>

        <div className="buttons">
          {!start ? (
            <button className="btn start" onClick={StartCount}>Start</button>
          ) : (
            <button className="btn stop" onClick={StopCount}>Stop</button>
          )}
          <button className='btn reset' onClick={ResetCount}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default App;

