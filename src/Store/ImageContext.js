import React, { createContext, useReducer } from "react";

const imageContext = createContext({
  colors: [],
  imageLoaded: false,
  imageUrl: "",
  palleteColors: [],
  palleteLength: 10,
  palleteLoaded: false,
  imageUrlHandler: () => {},
  imageOnLoadHandler: () => {},
});

const defaultImageState = {
  colors: [],
  imageLoaded: false,
  imageUrl: "",
  palleteColors: [],
  palleteLength: 10,
  palleteLoaded: false,
};

const imageReducer = (state, action) => {};
