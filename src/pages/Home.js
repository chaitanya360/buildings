import React from "react";
import { BlocksDetails } from "../components/DetailsPanel";
import VectorBlocks from "../components/VectorBlocks";
import styles from "./pages.module.css";

function home(props) {
  return (
    <div className={styles.home}>
      <BlocksDetails />
      <VectorBlocks />
    </div>
  );
}

export default home;
