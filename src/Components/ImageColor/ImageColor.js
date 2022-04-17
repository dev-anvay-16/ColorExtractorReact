import React, { useState } from "react";
import Image from "../Image/Image";
import Styles from "./ImageColor.module.css";

const ImageColor = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageUrlHandler = value => {
    setImageLoaded(false);
    setImageUrl(value);
  };

  const onLoadHandler = () => {
    setImageLoaded(true);
  };

  return (
    <main className={Styles["hero-container"]}>
      <div>
        <Image
          imageUrl={imageUrl}
          onLoadHandler={onLoadHandler}
          loaded={imageLoaded}
        />
      </div>
      <div></div>
    </main>
  );
};

export default ImageColor;
