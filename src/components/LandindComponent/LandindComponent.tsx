import styled from "styled-components";
import { Heading } from "@chakra-ui/react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled(Heading)`
  color: #e1e444;
  text-transform: uppercase;
  text-align: center;
`;

export const LandingComponent = () => {
  return (
    <Container>
      <Title fontSize="38vw" fontWeight="800">
        Pulse
      </Title>
    </Container>
  );
};
