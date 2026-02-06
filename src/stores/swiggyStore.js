import { configureStore } from "@reduxjs/toolkit";
import swiggyReducer from '../stores/swiggySlice'
const stored = configureStore({
    reducer: {
        swiggy: swiggyReducer
    }
})
export default stored