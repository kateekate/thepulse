import styled from "styled-components";

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const TextContainerWithPadding = styled(TextContainer)`
  padding: 0 25vw;
  text-align: justify;
`;
