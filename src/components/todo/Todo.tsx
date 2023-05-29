import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Ttodo, changeTodo, deleteTodo } from "../../store/slices/todos";
import styles from "./todo.module.css";
import { AiFillDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { MdOutlineUpdate, MdCancel } from "react-icons/md";
import Button from "../button/Button";

type Props = {
  todo: Ttodo;
};

export const Todo = (props: Props) => {
  const { todo } = props;
  const { text, id, completed } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const onChangeStatus = () => {
    dispatch(changeTodo({ id, completed: !completed }));
  };

  const ref = useRef<HTMLInputElement>(null);

  const onChangeText = () => {
    if (ref.current === null) {
      return;
    }
    dispatch(changeTodo({ id, newText: ref.current.value }));
    setIsEditing(false);
  };

  const onDeleteTodo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      {!isEditing && (
        <div
          className={styles.todoItemWrapper}
          onClick={() => onChangeStatus()}
        >
          <input
            className={styles.hiddenInput}
            ref={ref}
            checked={completed}
            type="checkbox"
          />
          {!completed ? (
            <p className={styles.customP}>{text}</p>
          ) : (
            <div>
              <hr className={styles.line} />{" "}
              <p className={styles.customP} onClick={() => onChangeStatus()}>
                {" "}
                {text}{" "}
              </p>{" "}
            </div>
          )}

          <div className={styles.buttonsBlock}>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                event.stopPropagation();
                setIsEditing(true);
              }}
              disabled={completed}
            >
              <BiEdit />
            </Button>

            <Button onClick={onDeleteTodo} disabled={completed}>
              <AiFillDelete />
            </Button>
          </div>
        </div>
      )}

      {isEditing && (
        <div>
          <input
            className={styles.customInput}
            ref={ref}
            type="text"
            maxLength={100}
            defaultValue={text}
          />

          <Button onClick={onChangeText}>
            <MdOutlineUpdate />
          </Button>
          <Button onClick={() => setIsEditing(false)}>
            <MdCancel />
          </Button>
        </div>
      )}
    </div>
  );
};
