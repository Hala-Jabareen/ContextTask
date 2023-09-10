import React, { useContext } from "react";
import { getImageUrl } from "./Utils";
import { MyContext } from "./MyContext";
import { OtherContext } from "./OtherContext.js";
const PlaceImage = () => {
  const imageSize=useContext(MyContext)
  const place=useContext(OtherContext)
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
};

export default PlaceImage;
