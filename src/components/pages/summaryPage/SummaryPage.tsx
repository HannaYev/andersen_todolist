import styles from "./summaryPage.module.css";
import { useAppSelector } from "../../../store/store";

type Ttodo = {
  text: string;
  completed: boolean;
  id: string;
};

export const SummaryPage = () => {
  const name = useAppSelector((state) => state.name.name);
  const todos = useAppSelector((state) => state.todos.allTodos);

  const completedTodos = todos.filter((todo: Ttodo) => todo.completed).length;
  const uncompletedTodos = todos.filter(
    (todo: Ttodo) => !todo.completed
  ).length;

  return (
    <div className={styles.summaryWrapper} data-testid="summary-page">
      <p>UserName: {name}</p>
      <p>Tasks Completed: {completedTodos} </p>
      <p>Tasks Uncompleted: {uncompletedTodos}</p>
    </div>
  );
};
