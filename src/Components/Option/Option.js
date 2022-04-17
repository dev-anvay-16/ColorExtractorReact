import React from "react";
import Input from "../UI/Input/Input";
import Styles from "./Option.module.css";
import OptionButton from "./OptionButton";
import useImageUrl from "../../hooks/use-imageUrl";

const Option = props => {
  const { imageUrl, b64Image, setImageUrl, imageUrlHandler } = useImageUrl();

  const optionHandler = value => {
    setImageUrl("");
    props.optionHandler(value);
  };

  const submitHandler = event => {
    event.preventDefault();
    if (b64Image && props.currOption === "UPLOAD") {
      props.imageUrl(b64Image);
      return;
    }
    props.imageUrl(imageUrl);
  };

  let inputType = "";

  switch (props.currOption) {
    case "URL":
      inputType = "text";
      break;
    case "UPLOAD":
      inputType = "file";
      break;
    default:
  }

  return (
    <div className={Styles["container"]}>
      <div className={Styles["options"]}>
        <OptionButton
          type="text"
          clickHandler={optionHandler}
          active={props.currOption}
        >
          URL
        </OptionButton>
        <OptionButton
          type="file"
          clickHandler={optionHandler}
          active={props.currOption}
        >
          UPLOAD
        </OptionButton>
      </div>
      <div className={Styles.current}>
        <form className={Styles.form} onSubmit={submitHandler}>
          <Input
            label={props.currOption}
            input={{ type: inputType }}
            value={imageUrl}
            onChangeHandler={imageUrlHandler}
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Option;
