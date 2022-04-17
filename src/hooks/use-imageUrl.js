import { useState, useCallback } from "react";

const useImageUrl = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [b64Image, setB64Image] = useState(null);

  const generateBase64FromImage = imageFile => {
    const reader = new FileReader();
    const promise = new Promise((resolve, reject) => {
      reader.onload = e => resolve(e.target.result);
      reader.onerror = err => reject(err);
    });
    reader.readAsDataURL(imageFile);
    return promise;
  };

  const imageUrlHandler = event => {
    setImageUrl(event.target.value);
    if (event.target.files) {
      const files = event.target.files;
      generateBase64FromImage(files[0])
        .then(b64 => {
          setB64Image(b64);
        })
        .catch(e => {});
    }
  };

  return {
    imageUrl,
    b64Image,
    setImageUrl,
    imageUrlHandler,
  };
};

export default useImageUrl;
