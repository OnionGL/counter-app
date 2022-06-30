import { configureStore, combineReducers } from "@reduxjs/toolkit";
import CounterReducer from './reducer/Counter-reducer';

const rootReducer = combineReducers({
   CounterReducer,
})

export const SetupStore = () => {
   return configureStore({
      reducer: rootReducer
   })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof SetupStore>
export type AppDispatch = AppStore['dispatch']