
//creating a store 

// import {configureStore} from '@reduxjs/toolkit'

// export const store = configureStore({
//     reducer:{}
// })


//--------------------------------

import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from "../app/feature/counter/counterSlice";

export const store = configureStore({
    reducer:{
        counter : CounterReducer
    }
})

