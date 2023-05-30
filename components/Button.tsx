import React from 'react';
import Link from 'next/link';
import styles from '../styles/button.module.scss';
enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface ButtonProps {
  text: string;
  backgroundColor: string;
  fontSize: number;
  size: Size;
  link?: string | null;
  handleClick: () => void;
}

const Button = ({ text, link, fontSize, size, backgroundColor, handleClick }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <a style={{ fontSize, backgroundColor }} className={`${size} ${styles.btn}`}>
          {text}
        </a>
      </Link>
    );
  }
  return (
    <div style={{ fontSize, backgroundColor }} onClick={handleClick} className={`${size} ${styles.btn}`}>
      {text}
    </div>
  );
};

Button.defaultProps = {
  text: 'Mint',
  backgroundColor: '#ccc',
  size: Size.Small,
  fontSize: 14,
  link: null
};

export default Button;
