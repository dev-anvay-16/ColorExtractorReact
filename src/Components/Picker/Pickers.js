import React, { useEffect, useState } from "react";
import Styles from "./Pickers.module.css";
import Picker from "./Picker";

const Pickers = React.forwardRef((props, refs) => {
  const [preview] = refs;

  const copyHandler = text => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className={Styles["picker-control"]}>
      <Picker
        copyHandler={copyHandler}
        type={"HEX"}
        color={props.color}
        ref={[]}
      >
        Color
      </Picker>
      <Picker
        copyHandler={copyHandler}
        type={"RGBA"}
        color={props.color}
        ref={[preview]}
      >
        Preview
      </Picker>
      {/* <div className={Styles["choosen-color"]}>
        <div
          className={Styles["color"]}
          style={{ backgroundColor: value }}
        ></div>
        <span className={Styles["color-value"]}>
          HEX : {value}{" "}
          <span
            className={Styles["copy"]}
            onClick={copyHandler.bind(null, value)}
          >
            {" "}
            {isCopied ? "Copied" : "copy"}
          </span>
        </span>
      </div> */}
      {/* <p>Preview</p>
      <div className={Styles["choosen-color"]}>
        <div className={Styles["color"]} ref={preview}></div>
        <span className={Styles["color-value"]}>
          RGBA : {`rgba(${r},${g},${b},255)`}{" "}
          <span
            className={Styles["copy"]}
            onClick={copyHandler.bind(null, props.color)}
          >
            {" "}
            {isCopied ? "Copied" : "copy"}
          </span>
        </span>
    </div>*/}
    </div>
  );
});

export default Pickers;
