import React, { useEffect, useRef }  from "react";
import {RootStateOrAny, useDispatch, useSelector} from 'react-redux';
import { customParagraphActions } from "../../store/customParagrah";
import { FaWindowClose } from '@react-icons/all-files/fa/FaWindowClose'
import './EditableParagraph.css';

const EditableParagraph = () => {
    const paragraph = useSelector((state: RootStateOrAny) => state.customPara.paragraph)
    const dispatch = useDispatch();
    const onInputChange = (event: { target: { value: any; }; }) => {
        dispatch(customParagraphActions.edit(event.target.value))
    }

    const closeEditBox = () => {
        dispatch(customParagraphActions.isEditable(false)) 
    }
    return(
        <div className='edit-paragraph'>
            <input type="text" value={paragraph} onBlur={closeEditBox} autoFocus onChange={onInputChange} title="Close"/>
            <FaWindowClose aria-label="Close" onClick={closeEditBox}/>
        </div>
    )
}

export default EditableParagraph;