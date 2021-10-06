import React, { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { customParagraphActions } from '../../store/customParagrah';
import Timer from '../Timer/Timer';
import Button from '../UIComponents/Button/Button';
import './UserInputParagraph.css';

const UserInputParagraph = () => {
    const paragraph = useSelector((state: RootStateOrAny)=>state.customPara.paragraph);
    const userTextValue = useSelector((state: RootStateOrAny)=>state.customPara.userInputPara);
    const initialMinute = useSelector((state: RootStateOrAny)=>state.timer.timer);
    const wordCounter = useSelector((state: RootStateOrAny)=>state.customPara.wordCounter);
    const correctWord = useSelector((state: RootStateOrAny)=>state.customPara.correctWordCount);
    const [resetWords, setResetWord] = useState(0);
    const timerStopped = useSelector((state: RootStateOrAny)=>state.timer.stopped);

    const dispatch = useDispatch();
    const textChange = (event: any) => {
        
        if(userTextValue > event.target.value) {
            dispatch(customParagraphActions.reset())
            setResetWord(parseInt(event.target.value.split(" ").length));
        }
        dispatch(customParagraphActions.updateUserInputPara(event.target.value.replace(/\s+/g, " ")));
        
    }
    const checkIfCorrectWord = () => {
        let words = paragraph.split(" ");
        let inputWords = userTextValue.split(" ");
         return words[wordCounter] === inputWords[wordCounter] ? true: false

    }
    const updateCount = (event:any) => {
        if(event.keyCode === 32) {
            dispatch(customParagraphActions.incrementCounter())
            if(checkIfCorrectWord()) {
                dispatch(customParagraphActions.updateCorrectCountWord());
            }
        }
    }

    useEffect(()=>{
        if(resetWords) {
            for (let index = 0; index < resetWords - 1 ; index++) {
                if(index > 0 ) {
                    dispatch(customParagraphActions.incrementCounter());
                }
                if(checkIfCorrectWord()) {
                    dispatch(customParagraphActions.updateCorrectCountWord());
                }
            }
            setResetWord(0);
        }
        
    },[resetWords])

    const restart = () => {
        window.location.reload();
    }

    const startAgain = () => {
        if(timerStopped) {
            return <Button name="Restart" onClick={restart} disabled={false}/>
        }
        
    }

    useEffect(()=>{
        startAgain()
    },[timerStopped, initialMinute])

    

    return(
        <div>
            <textarea onChange={textChange} value={userTextValue} onKeyUp={updateCount} disabled={timerStopped} />
            <Timer initialMinute={initialMinute}/>
            <div>Result: {correctWord}</div>
            {startAgain()}
        </div>
        

    )
}
export default UserInputParagraph;