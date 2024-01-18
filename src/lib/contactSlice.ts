import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: UserInput = {
  name: '',
  email: '',
  message: '',
}

export type InputChange = {
  type: string,
  input: string
}

export interface UserInput {
  name: string;
  email: string;
  message: string;
  [key: string]: string;
}

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    setInput: (state, action: PayloadAction<InputChange>) => {
      const type = action.payload.type.toLowerCase();
      state[type] = action.payload.input;
    },
    clearInput: () => initialState
  }
});

export const { setInput, clearInput } = contactSlice.actions;

export default contactSlice.reducer;