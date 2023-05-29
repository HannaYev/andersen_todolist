import { Slice, createSlice,PayloadAction } from "@reduxjs/toolkit";

interface TodosState {  
  name: string
}

const initialState:TodosState = {
  name: "",
};

export const nameSlice = createSlice({
  name: "app/name",
  initialState,
  reducers: {
    changeName: (state, action:PayloadAction<string>) => {
      state.name = action.payload;
     
    },
  },
});

export const { changeName } = nameSlice.actions;

export default nameSlice.reducer;
