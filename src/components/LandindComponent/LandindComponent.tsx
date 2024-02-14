import styled from "styled-components";
import { Parallax } from "react-scroll-parallax";

import {
  Header,
  LText,
  MText,
  SubHeader,
  XlText,
} from "components/shared/Text";
import { DescriptionContainer } from "components/DescriptionContainer/DescriptionContainer";
import { CarouselContainer } from "components/CarouselContainer/CarouselContainer";
import { ServiceContainer } from "components/ServiceContainer/ServiceContainer";
import { FlipCardsContainer } from "components/FlipCardsContainer/FlipCardsContainer";
import { ImageContainer } from "components/shared/ImageContainer";
import {
  TextContainer,
  TextContainerWithPadding,
} from "components/shared/TextContainer";
import { PlayBtnContainer } from "components/PlayBtnContainer/PlayBtnContainer";
import { FooterContainer } from "components/FooterContainer/FooterContainer";
import poster1 from "../../images/poster1.png";
import poster2 from "../../images/poster2.png";
import { FeedbackBtn } from "components/FeedbackContainer/FeedbackBtn";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 25vw;
  gap: 8vw;
`;

export const LandingComponent = () => {
  return (
    <div>
      <Header>Pulse</Header>
      <MainContainer>
        <TextContainer>
          <Parallax speed={-6}>
            <LText>From Concept to Creation</LText>
          </Parallax>
          <Parallax speed={-6}>
            <SubHeader>Innovate. Illuminate. Inspire.</SubHeader>
          </Parallax>
          <DescriptionContainer />
        </TextContainer>

        <CarouselContainer />

        <ImageContainer src={poster1} alt="poster1" />

        <Parallax speed={-6}>
          <SubHeader>
            Think Big & Designing Today for Tomorrow&apos;s Stories
          </SubHeader>
        </Parallax>
        <Parallax speed={-6}>
          <TextContainerWithPadding>
            <XlText>
              Our team of creative minds and technical experts are passionate
              about delivering exceptional experiences that captivate and
              inspire.
            </XlText>

            <MText>
              We believe in the power of storytelling and its ability to connect
              people. We are dedicated to creating experiences that resonate
              with your audience, leaving a lasting impression that goes beyond
              the event.
            </MText>
          </TextContainerWithPadding>
        </Parallax>
        <FlipCardsContainer />

        <Parallax speed={-6}>
          <ServiceContainer />
        </Parallax>

        <ImageContainer src={poster2} alt="poster2" />

        <Parallax speed={-5}>
          <PlayBtnContainer />
        </Parallax>
        <FeedbackBtn />
        <Parallax speed={-6}>
          <FooterContainer />
        </Parallax>
      </MainContainer>
    </div>
  );
};
