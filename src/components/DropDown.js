import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { getBlockName, getFloorNum } from "../utility/functions";
import styles from "./components.module.css";

const Icon = ({ open = false }) => {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/icons/${"up_arrow_white"}.svg`}
      alt="location icon"
      style={{
        transformOrigin: "center",
        transition: "transform 0.5s",
        transform: open && "rotate(180deg)",
        width: "20px",
        height: "auto",
        display: "inline-block",
      }}
    />
  );
};

const DropDown = ({ items, text, isFloor, blockId }) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
      }}
    >
      <Collapsible
        trigger={
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ margin: "0px 10px" }}>{text}</div>
            <Icon />
          </div>
        }
        autoFocus
        triggerWhenOpen={
          <div
            style={{
              display: "flex",
              cursor: "pointer",
              alignItems: "center",
            }}
          >
            <span style={{ margin: "0px 10px" }}>{text}</span>

            <Icon open />
          </div>
        }
        open={open}
        handleTriggerClick={() => setOpen((old) => !old)}
      >
        <div
          className={styles.list}
          style={{
            position: "absolute",
            left: "30px",
            maxHeight: "235px",
            transition: "transform 0.35s linear",
            overflowX: "hidden",
            overflowY: "scroll",
            transform: !open ? "scaleY(1)" : "scaleY(0)",
            transformOrigin: "top",
            backgroundColor: "rgba(46,182,123,1)",
          }}
        >
          {items.map((item) => (
            <Link
              to={isFloor ? `/block/${blockId}/${item}` : `/block/${item}`}
              key={item}
            >
              <div
                className={styles.list_item}
                key={item}
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  padding: "3px 10px",
                  fontSize: "18px",
                }}
              >
                <span
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setOpen((old) => !old)}
                >
                  {isFloor ? getFloorNum(item) : getBlockName(item)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Collapsible>
    </div>
  );
};

export default DropDown;
