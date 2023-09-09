import { configureStore } from '@reduxjs/toolkit'
import { RootReducer } from './Reducers/RootReducer'

const store = configureStore({
  reducer: RootReducer,
})

export type AppDispatch = typeof store.dispatch;
export default store