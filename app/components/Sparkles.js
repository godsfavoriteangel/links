import React from 'react';
import { random } from 'lodash';
import styled, { keyframes } from 'styled-components';
import usePrefersReducedMotion from './usePrefersReducedMotion';
import useRandomInterval from './useRandomInterval';

const DEFAULT_COLOR = '#FFFFFF';
const generateSparkle = color => {
  const sparkle = {
    id: String(random(10000, 99999)),
    createdAt: Date.now(),
    color,
    size: random(40, 80),
    style: {
      top: random(0, 1) + '%',
      left: random(0, 100) + '%',
    },
  };
  return sparkle;
};
const Sparkles = ({ color = DEFAULT_COLOR, children, ...delegated }) => {
    const [sparkles, setSparkles] = React.useState([]);
  const [isHovered, setIsHovered] = React.useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setSparkles([]);  // Clear sparkles when not hovering
  };

  useRandomInterval(
    () => {
      if (isHovered) {const sparkle = generateSparkle(color);
        const now = Date.now();
        const nextSparkles = sparkles.filter(sp => {
          const delta = now - sp.createdAt;
          return delta < 750;
        });
        nextSparkles.push(sparkle);
        setSparkles(nextSparkles);}
    },
    prefersReducedMotion ? null : 50,
    prefersReducedMotion ? null : 450
  );
  
  return (
    <Wrapper {...delegated} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {sparkles.map(sparkle => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <ChildWrapper>{children}</ChildWrapper>
    </Wrapper>
  );
};
const Sparkle = ({ size, color, style }) => {
    const [finalSize, setFinalSize] = React.useState(size);
  
    React.useEffect(() => {
      setFinalSize(random(40, 80)); // Replace with your random size logic
    }, []);
  
    const path =
      'M45.88,52.14,45,39.2l-.86,12.94A3.06,3.06,0,0,1,41.31,55l-12.93.86,12.93.86a3.06,3.06,0,0,1,2.85,2.85L45,72.5l.86-12.94a3.07,3.07,0,0,1,2.86-2.85l12.93-.86L48.74,55A3.07,3.07,0,0,1,45.88,52.14Z';
    return (
      <SparkleWrapper style={style}>
        <SparkleSvg width={finalSize} height={finalSize} viewBox="0 0 68 68" fill="none">
          <path d={path} fill={color} />
        </SparkleSvg>
      </SparkleWrapper>
    );
  };
const comeInOut = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
`;
const Wrapper = styled.span`
  display: inline-block;
  position: relative;
`;
const SparkleWrapper = styled.span`
  position: absolute;
  display: block;
  animation: ${comeInOut} 700ms forwards;
`;
const SparkleSvg = styled.svg`
  display: block;
  animation: ${spin} 1000ms linear;
`;
const ChildWrapper = styled.strong`
  position: relative;
  z-index: 1;
  font-weight: bold;
`;
export default Sparkles;