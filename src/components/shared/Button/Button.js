import React from "react";
import "./Button.css";

/**
 * This is a generic Table component that renders a header and columns based on the values given to it. It is pre-styled.
 * @param {text} string
 * @param {type} string. Default is 'primary' if nothing is provided. Currently only primary and secondary styles exist
 * @param {click}
 * @returns {ReactNode} 
 */
const Button = ({text, type = 'primary', click}) => {
  return (
    <button 
      id={text}
      className={`btn ${type}-btn`}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;
