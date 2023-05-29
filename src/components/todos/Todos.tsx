import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeFilterValue } from "../../store/slices/todos";
import Button from "../button/Button";
import { Todo } from "../todo/Todo";
import { AiOutlineFileAdd } from "react-icons/ai";
import styles from "./todos.module.css";
import { useAppSelector } from "../../store/store";

type Tstate = {
  allTodos: [];
  filter: string;
};

type Ttodo = {
  text: string;
  completed: boolean;
  id: string;
};

export const Todos = () => {
  const todos = useAppSelector((state) => state.todos.allTodos);
  const filter = useAppSelector((state) => state.todos.filter);

  const dispatch = useDispatch();
  // const ref = useRef("null");
  const ref = useRef<HTMLInputElement>(null!);

  const createTodo = () => {
    const text = ref.current.value;
    if (text) {
      dispatch(addTodo(text));
    }
    ref.current.value = "";
  };

  const content =
    filter === "All"
      ? todos
      : filter === "Completed"
      ? todos.filter((todo:Ttodo) => todo.completed)
      : todos.filter((todo:Ttodo) => !todo.completed);

  return (
    <div className={styles.todoPageWrapper}>
      <input
        className={styles.customInput}
        ref={ref}
        type="text"
        maxLength={100}
      />
      <Button onClick={createTodo}>
        <AiOutlineFileAdd />
      </Button>
      {content.map((todo:Ttodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};
