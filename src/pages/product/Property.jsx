import React from "react";
import property from "./img/property.jpg";

const Property = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flex-wrap">
        <img
          src={property}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Property;
