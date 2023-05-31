import { combineReducers, configureStore, isAnyOf } from "@reduxjs/toolkit";
import nameReducer, { changeName } from "./slices/name";
import todosReducer, { addTodo, changeTodo, deleteTodo } from "./slices/todos";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
  listenerMiddleware,
  startAppListening,
} from "./middleware/listenerMiddleware";

startAppListening({
  actionCreator: changeName,
  effect: (action) => {
    localStorage.setItem("userName", action.payload);
  },
});

startAppListening({
  matcher: isAnyOf(addTodo, deleteTodo, changeTodo),
  effect: (action, listenerApi) => {
    const { todos } = listenerApi.getState();
    localStorage.setItem("todos", JSON.stringify(todos.allTodos));
  },
});

export const RootReducer = combineReducers({
  name: nameReducer,
  todos: todosReducer,
});

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
