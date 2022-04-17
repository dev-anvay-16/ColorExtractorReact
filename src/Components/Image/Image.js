import React, { useEffect, useRef, useState } from "react";
import Colors from "../ColorPallete/Colors";
import Styles from "./Image.module.css";
import useHttp from "../../hooks/use-http";
import { getColors } from "../../lib/api";
import Pickers from "../Picker/Pickers";
import ColorPicker from "../ColorPicker/ColorPicker";

const Image = props => {
  const {
    sendRequest,
    data: colorsData,
    error,
    status,
  } = useHttp(getColors, true);
  const [color, setColor] = useState([255, 255, 255]);
  const [dataset, setDataset] = useState([]);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const divRef = useRef(null);
  const previewRef = useRef(null);

  const colorChoosenHandler = val => {
    setColor(val);
  };

  const mouseMoveHandler = event => {
    const imageDimension = imageRef.current.getBoundingClientRect();
    const w = imageRef.current.width;
    const h = imageRef.current.height;

    const x =
      +Math.round(event.pageX - window.scrollX - imageDimension.left) < 0
        ? 0
        : +Math.abs(
            Math.round(event.pageX - window.scrollX - imageDimension.left)
          );
    const y =
      +Math.round(event.pageY - window.scrollY - imageDimension.top) < 0
        ? 0
        : +Math.abs(
            Math.round(event.pageY - window.scrollY - imageDimension.top)
          );
    const tableRef = divRef.current.querySelectorAll("table tbody tr");
    divRef.current.style.visibility = "visible";
    const cords = [y, x];
    const curr = w * y + x;
    previewRef.current.style.background = `rgb(${dataset[curr][0]},${dataset[curr][1]},${dataset[curr][2]})`;

    let a = 0,
      b = 0,
      c = Math.floor(tableRef.length / 2);
    divRef.current.style.left = +event.pageX + 50 + "px";
    divRef.current.style.top = +event.pageY - 50 + "px";
    for (let i = cords[0] - c; i <= cords[0] + c; i++) {
      let tds = tableRef[a].querySelectorAll("td");
      for (let j = cords[1] - c; j <= cords[1] + c; j++) {
        let val = w * i + j;
        if (i < 0 || j < 0) {
          val = "rgb(21,20,25)";
        } else if (i >= h || j >= w) {
          val = "rgb(21,20,25)";
        } else {
          val = `rgb(${dataset[val][0]},${dataset[val][1]},${dataset[val][2]})`;
        }
        tds[b].setAttribute("x", j);
        tds[b].setAttribute("y", i);
        tds[b].style.backgroundColor = val;
        b++;
      }
      b = 0;
      a++;
    }
  };

  const imageClickHandler = event => {
    const imageDimension = imageRef.current.getBoundingClientRect();
    const w = imageRef.current.width;
    const x =
      +Math.round(event.pageX - window.scrollX - imageDimension.left) < 0
        ? 0
        : +Math.abs(
            Math.round(event.pageX - window.scrollX - imageDimension.left)
          );
    const y =
      +Math.round(event.pageY - window.scrollY - imageDimension.top) < 0
        ? 0
        : +Math.abs(
            Math.round(event.pageY - window.scrollY - imageDimension.top)
          );
    const curr = w * y + x;
    setColor([dataset[curr][0], dataset[curr][1], dataset[curr][2]]);
  };

  const mouseLeaveHandler = () => {
    divRef.current.style.visibility = "hidden";
  };

  useEffect(() => {
    if (props.loaded) {
      imageRef.current.crossOrigin = "Anonymous";
      const ctx = canvasRef.current.getContext("2d");
      const w = imageRef.current.width;
      const h = imageRef.current.height;
      canvasRef.current.width = w;
      canvasRef.current.height = h;
      ctx.drawImage(imageRef.current, 0, 0, w, h);
      const imageData = ctx.getImageData(0, 0, w, h).data;
      const data = [];
      for (let x = 0; x < imageData.length; x += 4) {
        const r = imageData[x + 0];
        const g = imageData[x + 1];
        const b = imageData[x + 2];
        data.push([r, g, b]);
      }

      setDataset(data);
      sendRequest(data);
    }
  }, [sendRequest, props.loaded, setDataset]);

  const image = props.imageUrl ? (
    <img
      src={props.imageUrl}
      alt={props.imageUrl}
      onLoad={props.onLoadHandler}
      onMouseMove={mouseMoveHandler}
      onMouseLeave={mouseLeaveHandler}
      onClick={imageClickHandler}
      ref={imageRef}
    />
  ) : (
    <p>Image not available</p>
  );

  return (
    <div className={Styles["image-color-picker"]}>
      <div className={Styles["image-holder"]}>
        {
          <Colors
            colors={!colorsData ? [] : colorsData.data}
            loaded={props.loaded}
            urlAvailable={props.imageUrl}
            status={status}
            chooseHandler={colorChoosenHandler}
          />
        }
        <div className={Styles["image-container"]}>{image}</div>
        <div className={Styles["image-container-canvas"]}>
          <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
        </div>
      </div>
      <div className={Styles["picker"]}>
        <Pickers color={color} ref={[previewRef]} />
        <ColorPicker ref={[divRef]} dataset={dataset} />
      </div>
    </div>
  );
};

export default Image;
