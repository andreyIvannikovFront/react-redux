import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getChapters } from '../../api'

const initialState = {
  counter: 0,
  posts: [],
  loading: false
}

export const fetchUserById = createAsyncThunk(
  'counter/fetchByPost',
  async () => {
    const response = await getChapters()
    return response
  }
)

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1
    },
    decrement: (state) => { state.counter -= 1 },
    rnd: (state) => { state.counter = Math.floor(Math.random() * 100) },
  },

  extraReducers: (b) => {
    b
      .addCase(fetchUserById.pending, (state) => { state.loading = true })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.posts = action.payload
        state.loading = false
      })
  }
});

const actions = counterSlice.actions

export const {
  increment,
  decrement,
  rnd,
} = actions

export default counterSlice.reducer;

