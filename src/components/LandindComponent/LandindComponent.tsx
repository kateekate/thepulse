import styled from "styled-components";
import Poster1 from "./images/img1.png";
import Poster2 from "./images/img2.png";

import Animation1 from "./images/back.gif";

import FlipCard from "./FlipCard/FlipCard";

import img1 from "./images/frontImage/img1.png";
import img2 from "./images/frontImage/img2.png";
import img3 from "./images/frontImage/img3.png";
import img4 from "./images/frontImage/img4.png";

export const LandingComponent = () => {
  const Header = styled.h1`
    position: absolute;
    top: 15vw;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #614a90;
    z-index: -10;
    font-size: 35vw;
    font-weight: 800;
    text-transform: uppercase;
  `;

  const Text = styled.h2`
    font-size: 1.3vw;
    text-transform: uppercase;
  `;

  const MText = styled(Text)`
    font-size: 1rem;
  `;

  const LText = styled(Text)`
    font-size: 1.5vw;
    color: white;
  `;

  const XlText = styled(Text)`
    font-size: 2.8vw;
    font-weight: 400;
    line-height: 1.25;
  `;

  const XXLText = styled(Text)`
    font-size: 10vw;
    font-weight: 800;
    line-height: 1.25;
    text-align: center;
  `;

  const SubHeader = styled.p`
    padding: 0 40px;
    font-size: 5vw;
    font-weight: 600;
    color: #6a6868bf;
    text-align: center;
    text-transform: uppercase;
  `;

  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25vw;
    gap: 60px;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  `;

  const TextContainerPadding = styled(TextContainer)`
    padding: 0 25vw;
    text-align: justify;
  `;

  const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 40px 0 40px;
    gap: 40px;
  `;

  const ImageContainer = styled(DescriptionContainer)`
    justify-content: center;
    padding: 30px 0;
    gap: 0;

    transition: transform 0.3s;
    &:hover {
      transform: scale(1.1);
    }
  `;

  const Image = styled.img`
    width: 80vw;
    height: auto;
  `;

  const BackgroundContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    background-image: url(${Animation1});
    background-size: cover;
    background-position: center;
  `;

  const ServiceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  `;

  const TextServiceContainer = styled.div`
    width: 90vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: justify;
    gap: 40px;
  `;

  return (
    <div>
      <Header>Pulse</Header>
      <MainContainer>
        <TextContainer>
          <LText>From Concept to Creation</LText>
          <SubHeader>Innovate. Illuminate. Inspire.</SubHeader>
        </TextContainer>

        <DescriptionContainer>
          <Text>
            From corporate branding to bespoke event themes, our portfolio
            showcases a spectrum of imaginative solutions tailored to elevate
            your brand&apos;s identity and engage your audience like never
            before.
          </Text>
          <Text>
            Explore our design philosophy that merges aesthetics with
            functionality, creating visually stunning and impactful designs that
            speak volumes.
          </Text>
          <Text>
            Discover how we bring events to life through immersive experiences,
            meticulous planning, and flawless execution, setting new benchmarks
            in the industry.
          </Text>
        </DescriptionContainer>

        <ImageContainer>
          <Image src={Poster1} alt="poster1" />
        </ImageContainer>

        <SubHeader>
          Think Big & Designing Today for Tomorrow&apos;s Stories
        </SubHeader>

        <TextContainerPadding>
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
        </TextContainerPadding>

        <BackgroundContainer>
          <FlipCard text={"Give"} frontImage={img1} />
          <FlipCard text={"Us"} frontImage={img2} />
          <FlipCard text={"Your"} frontImage={img3} />
          <FlipCard text={"Inspire"} frontImage={img4} />
        </BackgroundContainer>

        <ServiceContainer>
          <LText>Our Services</LText>
          <TextServiceContainer>
            <MText>
              We are gradually adding new functionality and we welcome your
              suggestions and feedback.
            </MText>
            <XXLText>Follow time</XXLText>
            <MText>
              We are gradually adding new functionality and we welcome your
              suggestions and feedback.
            </MText>
          </TextServiceContainer>
          <LText>Our Services</LText>
        </ServiceContainer>

        <ImageContainer>
          <Image src={Poster2} alt="poster2" />
        </ImageContainer>
      </MainContainer>
    </div>
  );
};
