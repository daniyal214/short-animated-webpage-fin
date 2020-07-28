import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/work.json";
import useWebAnimations, { zoomIn } from "@wellyshen/use-web-animations";

function Work() {

  const { ref, playState, getAnimation } = useWebAnimations({ ...zoomIn });

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

      <div ref={ref} className="work">
        <Lottie options={defaultOptions} height={450} width={450} />
      </div>
    </div>
  );
}

export default Work;




