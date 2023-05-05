import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addSave, getSave } from "./saveAPI";

const initialState = {
  save: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const createSavedData = createAsyncThunk(
  "save/createSavedData",
  async (data) => {
    const createSaved = await addSave(data);
    return createSaved;
  }
);

export const fetchSavedData = createAsyncThunk(
  "save/fetchSavedData",
  async (email) => {
    const getSaved = await getSave(email);
    return getSaved;
  }
);

// slice

const saveSlice = createSlice({
  name: "save",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(createSavedData.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(createSavedData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.save.push(action.payload);
      })
      .addCase(createSavedData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.save = [];
        state.error = action.error?.message;
      })
      .addCase(fetchSavedData.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchSavedData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.save = action.payload;
      })
      .addCase(fetchSavedData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.save = [];
        state.error = action.error?.message;
      });
  },
});

export default saveSlice.reducer;
