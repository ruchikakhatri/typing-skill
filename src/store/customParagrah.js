import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    paragraph : 'Various educators teach rules governing the length of paragraphs. They may say that a paragraph should be 100 to 200 words long, or be no more than five or six sentences. But a good paragraph should not be measured in characters, words, or sentences. The true measure of your paragraphs should be ideas.',
    editable: false,
    startChallenge: false,
    userInputPara: '',
    correctWordCount: 0,
    wordCounter: 0
}
const customParagraph = createSlice({
    name: 'customParagraph',
    initialState,
    reducers:{
        edit: ((state, action)=>{
            let value = action.payload
            state.paragraph = value
        }),
        isEditable: ((state, action)=>{
            let value = action.payload
            state.editable = value
        }),
        start: ((state) => {
            state.startChallenge = true
        }),
        updateUserInputPara: ((state, action)=>{ 
            state.userInputPara = action.payload
        }),
        updateCorrectCountWord: (state)=>{
            state.correctWordCount++;
        },
        incrementCounter: (state)=>{
            state.wordCounter++;
        },
        reset: (state)=>{
            state.wordCounter = 0;
            state.correctWordCount = 0
        }
    }
})

export const customParagraphActions = customParagraph.actions;

export default customParagraph.reducer;