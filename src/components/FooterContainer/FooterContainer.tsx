import styled from "styled-components";
import { FooterHeader } from "components/shared/Text";

const Container = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 120px;
  background-color: #000000;
`;

const Footer = styled.footer`
  height: 10vh;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #000000;
  color: white;
  font-size: 0.625rem;
`;

export const FooterContainer = () => {
  return (
    <Container>
      <FooterHeader>Don&apos;t worry, we just blow your mind</FooterHeader>
      <Footer>
        <a href="https://www.instagram.com/">Instagram</a>
        <p>© 2024 Pulse. All Rights Reserved.</p>
      </Footer>
    </Container>
  );
};
