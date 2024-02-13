import styled, { keyframes } from "styled-components";

export const Text = styled.h2`
  font-size: 1.3vw;
  text-transform: uppercase;
`;

export const MText = styled(Text)`
  font-size: 1rem;
`;

export const BlurMText = styled(MText)`
  backdrop-filter: blur(5px);
  padding: 15px;
`;

export const LText = styled(Text)`
  font-size: 1.5vw;
  color: #ffffffab;
`;

export const XlText = styled(Text)`
  font-size: 2.8vw;
  font-weight: 400;
  line-height: 1.25;
`;

const fillTextAnimation = keyframes`
  from {
    color: #6a6868bf;
  }
  to {
    color: #ffffffab;
  }
`;

export const XXLText = styled(Text)`
  font-size: 10vw;
  font-weight: 800;
  line-height: 1.25;
  text-align: center;

  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    animation: ${fillTextAnimation} 0.5s forwards;
  }
`;
