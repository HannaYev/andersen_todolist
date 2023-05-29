import React from "react";
import { useSelector } from "react-redux";
import styles from "./summaryPage.module.css"
import { useAppSelector } from "../../../store/store";

type Ttodo = {
  text: string;
  completed: boolean;
  id: string;
};

interface RootState {
  name: string 
  todos:[]
}

export const ActiveTodosPage = () => {
    const name = useAppSelector((state) => state.name.name); 
    const todos = useAppSelector((state) => state.todos.allTodos);
   
    const completedTodos = todos.filter(
        (todo:Ttodo) => todo.completed
      ).length;
    const uncompletedTodos = todos.filter(
      (todo:Ttodo) => !todo.completed
    ).length;



  return (
    <div className={styles.summaryWrapper}>
       <p>UserName: {name}</p>
       <p>Tasks Completed: {completedTodos} </p>
       <p>Tasks Uncompleted: {uncompletedTodos}</p>
     
    </div>
  );
};
