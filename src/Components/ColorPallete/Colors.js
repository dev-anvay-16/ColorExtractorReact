import Color from "./Color";
import Styles from "./Colors.module.css";

const Colors = props => {
  let colors;
  if (props.status === "completed") {
    colors = props.colors.map((ele, index) => {
      return (
        <Color
          key={`${ele}-${index}`}
          color={ele}
          chooseHandler={props.chooseHandler}
        />
      );
    });
  }

  return (
    <div className={Styles["color-pallete"]}>
      <p>
        <span></span> <span></span> <span></span>&nbsp;&nbsp;&nbsp;Pallete
      </p>

      {props.urlAvailable && props.status === "completed" && props.loaded ? (
        <ul>{colors}</ul>
      ) : props.urlAvailable ? (
        <p>Loading Pallete...</p>
      ) : (
        <p>Add an image to generate pallete</p>
      )}
    </div>
  );
};

export default Colors;
