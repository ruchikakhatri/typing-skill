import {createSlice} from '@reduxjs/toolkit';

const initialState = {
   timer : 1,
   stopped: false
}
const timeStore = createSlice({
    name: 'timer',
    initialState,
    reducers:{
        setTimer: ((state,action) => {
            state.timer = action.payload
        }),
        timerStopped: ((state) => {
            state.stopped = true
        }),
        
    }
})

export const timerActions = timeStore.actions;

export default timeStore.reducer;