import React from "react";
import Eng from "./img/engineering.jpg";

const Engineering = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flex-wrap">
        <img
          src={Eng}
          className="w-100 h-100 black-shadow"
          alt="engineering-insurance"
        />
      </div>
    </div>
  );
};

export default Engineering;
