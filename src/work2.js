import React from "react";

import Lottie from "react-lottie";
import animationData from "./lotties/work2.json";

export default function work2() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="work2">
      <Lottie options={defaultOptions} height={450} width={450} />
    </div>
  );
}
