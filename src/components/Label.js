import React from "react";
import styles from "./components.module.css";

function Label({ label }) {
  return <div className={styles.label}>{label}</div>;
}

export default Label;
