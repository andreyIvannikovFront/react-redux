import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getChapter } from '../../api'

const initialState = {
  hero: {},
  loading: false
}

export const fetchHeroById = createAsyncThunk(
  'hero/fetchByHero',
  async (id) => {
    const response = await getChapter(id)
    console.log(response);
    return response
  }
)

export const counterSlice = createSlice({
  name: "hero",
  initialState,
  extraReducers: (b) => {
    b
      .addCase(fetchHeroById.pending, (state) => { state.loading = true })
      .addCase(fetchHeroById.fulfilled, (state, action) => {
        state.hero = action.payload
        state.loading = false
      })
  }
});

export default counterSlice.reducer;

