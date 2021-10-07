import React from "react";

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "fit-content",
    heigth: "fit-content",
    position: "absolute",
    top: "1rem",
    left: "1rem",
    borderRadius: "5px",
    overflow: "hidden",
  },
  img: {
    width: "150px",
    heigth: "150px",
    objectFit: "containe",
    cursor: "pointer",
    borderRadius: "5px",
    border: "2px solid transparent",
    boxShadow: "1px 1px 2px 1px rgba(0,0,0,0.3)",
  },
};

function GothicLogo(props) {
  return (
    <div style={styles.body}>
      <a
        href="https://www.gothichomes.in/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/logo.png`}
          alt="gothic-logo"
          style={styles.img}
          className="gothic-logo"
        />
      </a>
    </div>
  );
}

export default GothicLogo;
