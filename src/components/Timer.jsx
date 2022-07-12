import React from 'react'
import { useEffect,useState } from 'react';

export const Timer = () => {
   const [timer, setTimer] = useState(10);
    useEffect(() => {
        const interval = setInterval(() => {
          setTimer((timer)=> timer-1);

          if(timer == 0){
            setTimer("")
            clearInterval(interval)
          }
        
        }, 1000);

        return () => clearInterval(interval)

    }, [timer]);

    return (
        <div> { timer} </div>
    )
}