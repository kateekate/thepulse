import styled, { keyframes } from "styled-components";
import { LText, MText, XlText } from "components/shared/Text";
import { DescriptionContainer } from "components/DescriptionContainer/DescriptionContainer";
import { CarouselContainer } from "components/CarouselContainer/CarouselContainer";
import { ServiceContainer } from "components/ServiceContainer/ServiceContainer";
import { FlipCardsContainer } from "components/FlipCardsContainer/FlipCardsContainer";
import { ImageContainer } from "components/shared/ImageContainer";
import {
  TextContainer,
  TextContainerWithPadding,
} from "components/shared/TextContainer";
import poster1 from "../../images/poster1.png";
import poster2 from "../../images/poster2.png";
import { PlayBtnContainer } from "components/PlayBtnContainer/PlayBtnContainer";

const Header = styled.h1`
  position: absolute;
  top: 15vw;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #9078e9cc;
  z-index: -10;
  font-size: 35vw;
  font-weight: 800;
  text-transform: uppercase;
`;

const fillTextAnimation = keyframes`
  from {
    color: #6a6868bf;
  }
  to {
    color: #ffffffab;
  }
`;

const SubHeader = styled.p`
  padding: 0 40px;
  font-size: 5vw;
  font-weight: 600;
  color: #6a6868bf;
  text-align: center;
  text-transform: uppercase;

  transition: color 0.3s ease;

  &:hover {
    animation: ${fillTextAnimation} 0.5s forwards;
  }
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25vw;
  gap: 80px;
`;

export const LandingComponent = () => {
  return (
    <div>
      <Header>Pulse</Header>
      <MainContainer>
        <TextContainer>
          <LText>From Concept to Creation</LText>
          <SubHeader>Innovate. Illuminate. Inspire.</SubHeader>
        </TextContainer>

        <DescriptionContainer />
        <CarouselContainer />
        <ImageContainer src={poster1} alt="poster1" />

        <SubHeader>
          Think Big & Designing Today for Tomorrow&apos;s Stories
        </SubHeader>

        <TextContainerWithPadding>
          <XlText>
            Our team of creative minds and technical experts are passionate
            about delivering exceptional experiences that captivate and inspire.
          </XlText>

          <MText>
            We believe in the power of storytelling and its ability to connect
            people. We are dedicated to creating experiences that resonate with
            your audience, leaving a lasting impression that goes beyond the
            event.
          </MText>
        </TextContainerWithPadding>

        <FlipCardsContainer />
        <ServiceContainer />
        <ImageContainer src={poster2} alt="poster2" />
        <PlayBtnContainer />
      </MainContainer>
    </div>
  );
};
