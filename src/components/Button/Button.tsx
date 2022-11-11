import React from "react";
import './button.css';

export interface ButtonInterface {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonInterface> = ({ text, onClick }) => {
  return (
    <button className="btn-group" onClick={onClick}>
      <span className="title">
        {text}
      </span>
    </button>
  )
}

export default Button;
