import React, { useState } from "react";
import styles from "../styles/input.module.scss";

export interface InputProps {
  hasBtn: boolean;
  btnText?: string;
  textColor?: string;
  placeholder?: string;
  value: number,
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
  const inputChange = (e:any) => {
    let obj:any = {};
    let value: any = e.target.value;
    value = value.match(/^\d*(\.?\d{0,8})/g)[0] || null;
    obj[e.target.id] = value;
    setInputValue(value);
  };
  return (
    <div className={styles.wrap}>
      <input
        onChange={(e) => inputChange(e)}
        type="number"
        placeholder={placeholder}
        value={inputValue}
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
