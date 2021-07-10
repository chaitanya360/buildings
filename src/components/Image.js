import React from "react";

const Image = ({ src, onLoad, style }) => {
  return (
    <div
      style={{
        objectFit: "contain",
        padding: "20px",
        paddingTop: window.innerWidth < 900 ? "60px" : "20px",
        minWidth: "300px",
        maxWidth: "700px",
        minHeight: "400px",
        ...style,
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/flats/${src}.png`}
        alt="flat plan"
        onLoad={onLoad}
        style={{
          height: "80vh",
          width: "auto",
        }}
      />
    </div>
  );
};

export default Image;
