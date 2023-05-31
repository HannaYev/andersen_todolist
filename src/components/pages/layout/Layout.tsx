import styles from "./layout.module.css";
import { Link, Outlet } from "react-router-dom";
import { useAppSelector } from "../../../store/store";

export const Layout = () => {
  const name = useAppSelector((state) => state.name.name);
  const todos = useAppSelector((state) => state.todos.allTodos);

  const countnerActiveTodos = todos.filter(
    (todo) => todo.completed === false
  ).length;

  return (
    <div>
      <div className={styles.wrapper}>
        <div>
          <p className={styles.layoutP}>{name}</p>
          <p className={styles.layoutP}>
            Totoal active tasks: {countnerActiveTodos}
          </p>
        </div>
        <div>
          <Link className={styles.layoutLink} to="">
            Todos
          </Link>
          <Link className={styles.layoutLink} to="summary">
            Summary
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
