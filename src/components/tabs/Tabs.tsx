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
      <button className={styles.tabsItem} onClick={() => changeFilter("All")}>All</button>
      <button className={styles.tabsItem} onClick={() => changeFilter("Active")}>Active</button>
      <button className={styles.tabsItem} onClick={() => changeFilter("Completed")}>Completed</button>
    </div>
  );
};
