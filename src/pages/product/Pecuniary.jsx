import React from "react";
import pecuniary from "./img/pecuniary.jpg";

const Pecuniary = () => {
  return (
    <div className="container-fluid px-0">
      <div className="flex-wrap">
        <img
          src={pecuniary}
          className="w-100 h-100 black-shadow"
          alt="board=of=directors"
        />
      </div>
    </div>
  );
};

export default Pecuniary;
