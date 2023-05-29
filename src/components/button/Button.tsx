import React from "react";
import styles from "./Button.module.css";

// type ButtonProps = {
//     children:string,
//     type:React.ButtonHTMLAttributes<HTMLButtonElement>,
//     onClick:()=>{},
//     disabled:boolean
// }

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick: | ((event: React.MouseEvent<HTMLButtonElement>) => void)
  | undefined;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  type = "button",
  onClick,
  disabled,
}) => {
  // const {children,type="button",onClick, disabled} = props
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
