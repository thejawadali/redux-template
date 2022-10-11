import { createSlice } from '@reduxjs/toolkit'
import { GetTasksReducer } from "./counter.thunk"

const initialState = {
  value: 10,
  myName: "Jawad Ali",
  tasks: []
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    changeName: (state, n)=> {
      state.myName = n.payload
    }
  },
  extraReducers: {
    ...GetTasksReducer,
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, changeName } = counterSlice.actions

export default counterSlice.reducer