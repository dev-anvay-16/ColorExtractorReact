import React from "react";
import Styles from "./OptionButton.module.css";

const OptionButton = props => {
  const activeClass = `${Styles.button} ${props.active && Styles.active}`;
  return (
    <button
      onClick={props.clickHandler.bind(null, props.children)}
      className={
        props.active === props.children ? activeClass : Styles["button"]
      }
    >
      {props.children}
    </button>
  );
};

export default OptionButton;
