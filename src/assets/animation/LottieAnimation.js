
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

function LottieAnimation({ animationData }) {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (!animationData || !animationContainer.current) return;

    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => anim.destroy(); // Cleanup animation on unmount
  }, [animationData]);

  return (
    <div
      ref={animationContainer}
      className="w-64 h-64 mx-auto"
    />
  );
}

export default LottieAnimation;

