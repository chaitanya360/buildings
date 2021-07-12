import React from "react";
import Lottie from "react-lottie";
import loadingSVG from "./loading2.json";

function Loading(props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingSVG,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        transform: "translate(-50%,-50%)",
        top: "50%",
      }}
    >
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
        isClickToPauseDisabled
      />
    </div>
  );
}

export default Loading;
