import React, { Fragment } from "react";

import Styles from "./Picker.module.css";

const Picker = React.forwardRef((props, ref) => {
  let value = "";
  const r = Math.floor(props.color[0]),
    g = Math.floor(props.color[1]),
    b = Math.floor(props.color[2]);
  if (props.type === "HEX") {
    value = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  } else if (props.type === "RGBA") {
    value = `rgba(${r},${g},${b},255)`;
  }

  return (
    <Fragment>
      <p>{props.children}</p>
      <div className={Styles["choosen-color"]}>
        <div
          className={Styles["color"]}
          style={{
            backgroundColor:
              props.type === "RGBA" ? "rgba(255,255,255,255)" : value,
          }}
          ref={ref.length > 0 ? ref[0] : null}
        ></div>
        <div className={Styles["color-value"]}>
          <span>{props.type} :&nbsp;</span>
          <span
            style={{
              fontSize: "14px",
              textAlign: "center",
              textTransform: "lowercase",
            }}
          >
            {value}
          </span>
          <span
            className={Styles["copy"]}
            onClick={props.copyHandler.bind(null, value)}
          >
            {"copy"}
          </span>
        </div>
      </div>
    </Fragment>
  );
});

export default Picker;
