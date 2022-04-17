import React, { Fragment } from "react";
import Styles from "./Input.module.css";

const Input = props => {
  return (
    <div className={Styles.input}>
      {/* <label htmlFor={props.input.id}>{props.label}</label> */}
      <input
        {...props.input}
        value={props.value}
        onChange={props.onChangeHandler}
        placeholder="URL"
      />
    </div>
  );
};

export default Input;
