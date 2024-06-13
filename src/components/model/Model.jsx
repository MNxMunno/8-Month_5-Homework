import React, { Children } from "react";

const Model = ({ close, children }) => {
  return (
    <>
      <div className="overlay" onClick={() => close(false)}></div>
      <div className="model">{children}</div>
    </>
  );
};

export default Model;
