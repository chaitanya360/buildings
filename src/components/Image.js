import React from "react";

const Image = ({ src, onLoad, style }) => {
  return (
    <div
      style={{
        objectFit: "contain",
        padding: "20px",
        minWidth: "300px",
        maxWidth: "700px",
        minHeight: "400px",
        ...style,
      }}
    >
      <img
        width="100%"
        height="100%"
        src={`${process.env.PUBLIC_URL}/images/flats/${src}.png`}
        alt="flat plan"
        onLoad={onLoad}
        style={{
          maxHeight: "80vh",
          width: window.innerWidth > 900 ? "auto" : "100%",
        }}
      />
    </div>
  );
};

export default Image;