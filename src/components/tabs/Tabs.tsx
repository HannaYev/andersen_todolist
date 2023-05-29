import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { changeFilterValue } from "../../store/slices/todos";
import Button from "../button/Button";
import styles from "./tabs.module.css"

export type TNewFilter="All"|"Active"|"Completed"


export const Tabs = () => {
  const dispatch = useDispatch();
  const changeFilter = (newFilter:TNewFilter) => {
    dispatch(changeFilterValue(newFilter));
  };
  return (
    <div className={styles.tabsWrapper}>
      <Button onClick={() => changeFilter("All")}>All</Button>
      <Button onClick={() => changeFilter("Active")}>Active</Button>
      <Button onClick={() => changeFilter("Completed")}>Completed</Button>
    </div>
  );
};
