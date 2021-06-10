import React from "react";
import VectorBlocks from "../components/VectorBlocks";
import styles from "./pages.module.css";

function home(props) {
  return (
    <div className={styles.home}>
      <VectorBlocks />
    </div>
  );
}

export default home;
