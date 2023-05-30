import React, { useState } from "react";
import styles from "../styles/input.module.scss";

export interface InputProps {
  hasBtn: boolean;
  btnText?: string;
  textColor?: string;
  placeholder?: string;
  handleClick: (value: string) => void;
}

const Input = ({
  btnText,
  textColor,
  hasBtn,
  handleClick,
  placeholder,
}: InputProps) => {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className={styles.wrap}>
      <input
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder={placeholder}
      />
      {hasBtn ? (
        <button
          onClick={() => handleClick(inputValue)}
          style={{ color: textColor }}
        >
          {btnText}
        </button>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  hasBtn: true,
  btnText: "submit",
  textColor: "#FCBF19",
  placeholder: "Please Input Number",
};

export default Input;
