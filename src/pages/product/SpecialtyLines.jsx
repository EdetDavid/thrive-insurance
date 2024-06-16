import React from "react";
import specialty from "./img/specialty-lines.jpg";

const SpecialtyLines = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flex-wrap">
        <img
          src={specialty}
          className="w-100 h-100 black-shadow"
          alt="engineering-insurance"
        />
      </div>
    </div>
  );
};

export default SpecialtyLines;
