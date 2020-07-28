import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/work1.json";
import useWebAnimations, { zoomInLeft } from "@wellyshen/use-web-animations";

function Work1() {

  const { ref } = useWebAnimations({ ...zoomInLeft });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div>

      <div ref={ref} className="work1">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </div>
  );
}

export default Work1;




