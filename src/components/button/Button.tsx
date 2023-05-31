import React from "react";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children = "standart button",
  type = "button",
  onClick,
  disabled,
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={styles.button}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
