import React from "react";
import Link from "next/link";
import styles from "../styles/button.module.scss";
enum Size {
  Small = "small",
  Medium = "medium",
  Large = "large",
}

enum Type {
  Primary = "primary",
  Normal = "normal",
}

export interface ButtonProps {
  size: Size;
  type: Type;
  link?: string | null;
  renderContent: () => any;
  handleClick: () => void;
}

const Button = ({
  link,
  size,
  type,
  handleClick,
  renderContent,
}: ButtonProps) => {
  if (link) {
    return (
      <Link href={link}>
        <a className={`${styles.btn} ${styles[size]} ${styles[type]}`}>
          {renderContent()}
        </a>
      </Link>
    );
  }
  return (
    <div
      onClick={handleClick}
      className={`${styles.btn} ${styles[size]} ${styles[type]}`}
    >
      {renderContent()}
    </div>
  );
};

Button.defaultProps = {
  type: Type.Primary,
  size: Size.Medium,
  link: null,
};

export default Button;
