import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../redux/slide/counterSlide.js'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
}) 