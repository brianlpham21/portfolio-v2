import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    increment: state => {
      state.count++
    },
  },
})

export const { increment } = viewSlice.actions
export default viewSlice.reducer
