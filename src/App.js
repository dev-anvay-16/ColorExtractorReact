import "./App.css";
import Option from "./Components/Option/Option";
import React, { useState } from "react";
import Image from "./Components/Image/Image";
import Particle from "./Components/UI/Particle";

function App() {
  const [currOption, setCurrOption] = useState("URL");
  const [imageUrl, setImageUrl] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const optionHandler = value => {
    setCurrOption(value);
  };

  const imageUrlHandler = value => {
    setImageLoaded(false);
    setImageUrl(value);
  };

  const onLoadHandler = () => {
    setImageLoaded(true);
  };

  return (
    <div className="App">
      {/* <Particle /> */}
      <Option
        optionHandler={optionHandler}
        imageUrl={imageUrlHandler}
        currOption={currOption}
      />
      <Image
        imageUrl={imageUrl}
        onLoadHandler={onLoadHandler}
        loaded={imageLoaded}
      />
    </div>
  );
}

export default App;
