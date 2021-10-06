import React, { useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import EditableParagraph from '../EditableParagraph/EditableParagraph';
import './CustomParagraph.css';
import { FaEdit } from "@react-icons/all-files/fa/FaEdit";
import { customParagraphActions } from '../../store/customParagrah';
import Button from '../UIComponents/Button/Button';
import UserInputParagraph from '../UserInputParagraph/UserInputParagraph';
import { timerActions } from '../../store/timerStore';

const CustomParagraph = () => {
    const [customTime, setCustomTime] = useState('');
    const [disable, setDisable] = useState(false);
    const edit = useSelector((state: RootStateOrAny) => state.customPara.editable)
    const paragraph = useSelector((state: RootStateOrAny) => state.customPara.paragraph);
    const startTyping = useSelector((state: RootStateOrAny) => state.customPara.startChallenge)
    const dispatch = useDispatch();
    const editParagraph = () => {
        dispatch(customParagraphActions.isEditable(true))
    }
    const startChallenge = () => {
        dispatch(customParagraphActions.start());
    }
    const selectedOption = (event:any) => {
        if(event.target.value === 'custom') {
            setDisable(true);
        } else {
            dispatch(timerActions.setTimer(event.target.value))
            setDisable(false);
        }
    }
    const timerInputChange = (event:any) => {
        setCustomTime(event.target.value);
        if(event.target.value === '') {
            setDisable(true);
        } else {
            setCustomTime(event.target.value);
            dispatch(timerActions.setTimer(event.target.value))
            setDisable(false)
        }
        
    }
    return (
        <>
            {edit ?
                <EditableParagraph /> :
                <p>{paragraph}<FaEdit onClick={editParagraph} title='Edit Text' aria-label="Edit" /></p>
            }

            {startTyping ? <UserInputParagraph />
                : <div>
                    <label>Time Duration</label>
                    <select name="time" id="timeDuration" onChange={selectedOption}>
                        <option value="1">1 min</option>
                        <option value="2">2 min</option>
                        <option value="3">3 min</option>
                        <option value="custom">Custom Time</option>
                    </select>
                    {(disable || customTime) &&(<><input type="number" value={customTime} placeholder="Enter custom time in minutes" onChange={timerInputChange}/> <label>min</label></>)}
                    
                    <Button
                        name='Start Challenge'
                        onClick={startChallenge}
                        disabled={disable}
                    />
                </div>
            }
        </>
    )
}
export default CustomParagraph;