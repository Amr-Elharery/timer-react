import { useEffect, useState } from 'react';

function Timer() {
  let [timer, setTime] = useState(new Date().toLocaleTimeString());

  useEffect( ()=>{
    const timeInterval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timeInterval)
  })

  return (
    <div className="timer">
      {timer}
    </div>
  )
}

export default Timer;

