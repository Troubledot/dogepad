import React, { useState } from 'react';
import styles from '../styles/input.module.scss';

export interface InputProps {
  hasBtn: boolean;
  btnText?: string;
  bgColor?: string;
  textColor?: string;
  handleSubmit: (value: string) => void;
}

const Input = ({ bgColor, btnText, textColor, hasBtn, handleSubmit }: InputProps) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.wrap} style={{ background: bgColor }}>
      <input onChange={e => setInputValue(e.target.value)} type="text" />
      {hasBtn ? (
        <button onClick={() => handleSubmit(inputValue)} style={{ color: textColor }}>
          {btnText}
        </button>
      ) : null}
    </div>
  );
};

Input.defaultProps = {
  hasBtn: true,
  btnText: 'submit',
  bgColor: '#383838',
  textColor: '#FCBF19'
};

export default Input;
