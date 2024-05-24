// components/LottieAnimation.tsx
import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

interface LottieAnimationProps {
  animationData: object;
  height?: string | number;
  width?: string | number;
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ animationData, height = '300px', width = '300px' }) => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ height, width }}
    >
    </Player>
  );
};

export default LottieAnimation;
