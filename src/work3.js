import React from "react";

import Lottie from "react-lottie";
import animationData from "./lotties/work3.json";

export default function work3() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="work3">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}
