import React from "react";
import Styles from "./Color.module.css";

const Color = props => {
  const rgba = `rgb(${Math.floor(props.color[0])},${Math.floor(
    props.color[1]
  )},${Math.floor(props.color[2])})`;
  return (
    <li
      className={Styles["color"]}
      onClick={props.chooseHandler.bind(null, props.color)}
      style={{ backgroundColor: rgba }}
    >
      {/* <p>{props.color}</p> */}
    </li>
  );
};

export default Color;
