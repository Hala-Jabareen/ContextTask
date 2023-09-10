import React from "react";
import PlaceImage from "./PlaceImage";

const Place = ({ place, imageSize }) => {
  return (
    <>
      <PlaceImage   />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
};

export default Place;
