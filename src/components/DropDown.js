import React, { useState } from "react";
import Collapsible from "react-collapsible";
import { Link } from "react-router-dom";
import { colors } from "../utility";
import { getBlockName, getFloorNum } from "../utility/functions";

const Icon = ({ open = false }) => {
  return (
    <img
      width="100%"
      height="100%"
      src={`${process.env.PUBLIC_URL}/images/icons/${"up_arrow"}.svg`}
      alt="location icon"
      style={{
        transformOrigin: "center",

        transition: "transform 0.5s",
        margin: "5px",
        transform: open && "rotate(180deg)",
      }}
    />
  );
};

const DropDown = ({ items, text, isFloor, blockId }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: "absolute",
        top: "0%",
        marginTop: "7%",
      }}
    >
      <Collapsible
        trigger={
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "block ",
              display: "flex",
              marginInline: "10px 20px",
              cursor: "pointer",
            }}
          >
            {text}
            <Icon open />
          </span>
        }
        autoFocus
        triggerWhenOpen={
          <span
            style={{
              width: "20px",
              height: "20px",
              display: "block ",
              display: "flex",
              objectFit: "cover",
              marginInline: "10px 20px",
              cursor: "pointer",
            }}
          >
            {text}

            <Icon />
          </span>
        }
        open={open}
        handleTriggerClick={() => setOpen((old) => !old)}
      >
        <div style={{ position: "relative" }}>
          {items.map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: colors.light_blue,
                width: "100%",
                textAlign: "center",
              }}
            >
              <Link
                to={isFloor ? `/block/${blockId}/${item}` : `/block/${item}`}
              >
                <span
                  style={{ color: "white", textDecoration: "none" }}
                  onClick={() => setOpen((old) => !old)}
                >
                  {isFloor ? getFloorNum(item) : getBlockName(item)}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Collapsible>
    </div>
  );
};

export default DropDown;
