import React from "react";
import Lottie from "react-lottie";
import animationData from "./animation.json";

function myAnimation() {
  return (
    <div>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        isClickToPauseDisabled={true}
        // width={100}
      />
    </div>
  );
}

export default myAnimation;
