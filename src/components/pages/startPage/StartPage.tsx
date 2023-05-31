import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { changeName } from "../../../store/slices/name";
import Button from "../../button/Button";
import styles from "./startPage.module.css";
import { useAppSelector } from "../../../store/store";

export const StartPage = () => {
  const name = useAppSelector((state) => state.name.name);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const onNext = () => {
    if (name) {
      navigate("/todos");
    }
  };

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };

  return (
    <div className={styles.startPageWrapper}>
      <input
        className={styles.customInput}
        value={name}
        onChange={onChangeName}
        type="text"
        placeholder="Enter your name"
      />
      <Button onClick={onNext}> Continue </Button>
    </div>
  );
};
