import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CounterInterface } from '../models/MainInterface';


const initialState: CounterInterface = {
   value: [{
      id: 1,
      value: 0
   }],
}


export const CounterReducer = createSlice({
   name: 'counter',
   initialState,
   reducers: {
      increment: (state, action: PayloadAction<number>) => {
         state.value.map(value => {
            if (value.id === action.payload) {
               return value.value += 1
            }
         }

         )
      },
      decrement: (state, action: PayloadAction<number>) => {
         state.value.map(value => {
            if (value.id === action.payload) {
               return value.value -= 1
            }
         }
         )
      },
      addCounter: (state) => {
         state.value.push({
            id: state.value[state.value.length - 1].id + 1,
            value: state.value.reduce((acc, value) => acc + value.value, 0)
         })
      },
      deleteCounter: (state, action: PayloadAction<number>) => {
         state.value = state.value.filter(count => {
            return count.id !== action.payload
         })
      }
   }
})

export default CounterReducer.reducer;

