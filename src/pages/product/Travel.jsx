import React from "react";
import travel from "./img/travel.jpg";

const Travel = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flex-wrap">
        <img
          src={travel}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Travel;
