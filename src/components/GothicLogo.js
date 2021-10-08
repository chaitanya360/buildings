import React from "react";

const styles = {
  body: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: "1rem",
    left: "1rem",
    borderRadius: "5px",
    overflow: "hidden",
    width: "90px",
    boxShadow: "1px 1px 2px 1px rgba(0,0,0,0.3)",
  },
  img: {
    width: "100%",
    heigth: "auto",
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "5px 5px 0 0",
  },

  text: {
    color: "white",
    fontSize: "0.8rem",
    fontWeight: "300",
    width: "100%",
    textAlign: "center",
    backgroundColor: "tomato",
    padding: "2px 5px",
  },
  link: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
  },
};

function GothicLogo(props) {
  return (
    <div style={styles.body} className="gothic-logo">
      <a
        href="https://www.gothichomes.in/"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <img
          src={`${process.env.PUBLIC_URL}/images/icons/logo.png`}
          alt="gothic-logo"
          style={styles.img}
          title="visit site"
        />
        <div style={styles.text}>visit website</div>
      </a>
    </div>
  );
}

export default GothicLogo;
