import React from 'react';
import Link from 'next/link';
import styles from '../styles/button.module.scss';
enum Size {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface ButtonProps {
  backgroundColor: string;
  fontSize: number;
  size: Size;
  link?: string | null;
  renderContent: () => any;
  handleClick: () => void;
}

const Button = ({ link, fontSize, size, backgroundColor, handleClick, renderContent }: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <a style={{ fontSize, backgroundColor }} className={`${size} ${styles.btn}`}>
          {renderContent()}
        </a>
      </Link>
    );
  }
  return (
    <div style={{ fontSize, backgroundColor }} onClick={handleClick} className={`${size} ${styles.btn}`}>
      {renderContent()}
    </div>
  );
};

Button.defaultProps = {
  text: 'Mint',
  backgroundColor: '#ccc',
  size: Size.Medium,
  fontSize: 14,
  link: null
};

export default Button;
