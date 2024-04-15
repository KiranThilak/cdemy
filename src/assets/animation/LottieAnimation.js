import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';

function LottieAnimation({ animationData, className, width, height }) {
  const animationContainer = useRef(null);

  useEffect(() => {
    if (!animationData || !animationContainer.current) return;

    const anim = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true,
      autoplay: true,
    });

    return () => anim.destroy(); 
  }, [animationData]);

  return (
    <div
      ref={animationContainer}
      className={className}
      style={{ width: width, height: height }}
    />
  );
}

export default LottieAnimation;





