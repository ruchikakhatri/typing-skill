import customParagraphReducer from './customParagrah'
import { configureStore } from '@reduxjs/toolkit';
import timerReducer  from './timerStore';


const store = configureStore({
    reducer: {
        customPara: customParagraphReducer,
        timer: timerReducer
    }
});

export default store;