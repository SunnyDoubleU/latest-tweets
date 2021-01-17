import styled from 'styled-components/macro';
import { keyframes } from 'styled-components/macro';

const aniHorizontal = keyframes`
  0% {
    background-position: -100% 0;
    opacity: 1
  };

  50% {
    opacity: 0.3
  }

  100% {
    background-position: 100% 0;

  }
`;

const DSkeleton = styled.div`
    border-radius: 10px;
    animation: ${aniHorizontal} 1.5s linear infinite;
    /* background: linear-gradient(90deg, #ccc 2%, #ddd 40%, #ccc 80%); */
    background: #ccc;
    background-size: 50%;
`;

export default DSkeleton;
