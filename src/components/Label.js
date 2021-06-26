import React from "react";
import { getBlockName } from "../utility/functions";
import styles from "./components.module.css";

function Label({ label, blockId }) {
  return (
    <div className={styles.label}>
      {blockId && (
        <div style={{ fontSize: "18px" }}>
          {getBlockName(blockId) + " Block"}
        </div>
      )}
      <div>{label}</div>
    </div>
  );
}

export default Label;
