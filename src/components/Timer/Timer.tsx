import React from 'react'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { timerActions } from '../../store/timerStore';

const Timer = (props: any) => {
   // const { initialMinute = 0 } = props;
    const [minutes, setMinutes] = useState(props.initialMinute);
    const [seconds, setSeconds] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };
    });

    useEffect(() => {
        setTimeout(()=>{
            dispatch(timerActions.timerStopped())  
        }, props.initialMinute * 60000)
                          
        
    }, [props.initialMinute, dispatch])

    return (
        <div>
            <h1> {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>

        </div>
    )
}

export default Timer;