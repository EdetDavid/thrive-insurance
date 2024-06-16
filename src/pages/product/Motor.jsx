import React from "react";

import motor from "./img/motor.jpg";

const Motor = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flex-wrap">
        <img
          src={motor}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Motor;
