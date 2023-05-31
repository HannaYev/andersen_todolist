import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

interface TodosState {
  allTodos: Ttodo[];
  filter: string;
}

export type Ttodo = {
  text: string;
  completed: boolean;
  id: string;
};

const initialState: TodosState = {
  allTodos: [],
  filter: "All",
};

export const todosSlice = createSlice({
  name: "app/todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const text = action.payload;
      state.allTodos.unshift({ text, completed: false, id: uuid() });
    },

    deleteTodo: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.allTodos = state.allTodos.filter((todo: Ttodo) => todo.id !== id);
    },

    changeFilterValue: (state, action: PayloadAction<string>) => {
      const filter = action.payload;
      state.filter = filter;
    },

    changeTodo: (
      state,
      action: PayloadAction<{
        newText?: string;
        completed?: boolean;
        id: string;
      }>
    ) => {
      const { newText, completed, id } = action.payload;
      const todo = state.allTodos.find((todo: Ttodo) => todo.id === id);
      if (todo) {
        todo.text = newText === undefined ? todo.text : newText;
        todo.completed = completed === undefined ? todo.completed : completed;
      }
    },

    replaceAllTodos: (state, action: PayloadAction<[]>) => {
      const todos = action.payload;
      state.allTodos = todos;
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  changeTodo,
  replaceAllTodos,
  changeFilterValue,
} = todosSlice.actions;
export default todosSlice.reducer;
