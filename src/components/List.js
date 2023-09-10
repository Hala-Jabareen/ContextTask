import React from "react";
import { places } from "./Data";
import Place from "./Place";
import { OtherContext } from "./OtherContext";


const List = ({ imageSize }) => {
  const listItems = places.map((place) => (
    <li key={place.id}>
      <OtherContext.Provider value={place}>
        <Place place={place} />
      </OtherContext.Provider>
        
      
        
     
        
      
    </li>
  ));
  return <ul>{listItems}</ul>;
};
export default List;
