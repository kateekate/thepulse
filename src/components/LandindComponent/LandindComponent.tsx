import styled, { keyframes } from "styled-components";
import Poster1 from "./images/img1.png";
import Poster2 from "./images//img2.png";

import CarouselImg1 from "./images/carouselImg/1.png";
import CarouselImg2 from "./images/carouselImg/2.png";
import CarouselImg3 from "./images/carouselImg/3.png";
import CarouselImg4 from "./images/carouselImg/4.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Animation1 from "./images/back.gif";

import FlipCard from "./FlipCard/FlipCard";

import img1 from "./images/frontImage/img1.png";
import img2 from "./images/frontImage/img2.png";
import img3 from "./images/frontImage/img3.png";
import img4 from "./images/frontImage/img4.png";

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
  color: #ffffffab;
`;

const XlText = styled(Text)`
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

const XXLText = styled(Text)`
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
  flex-direction: row;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
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

const FlipCardColumn = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FlipCardRow = styled.div`
  width: 30vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;

const BlurTextContainer = styled(MText)`
  backdrop-filter: blur(5px);
  padding: 15px;
`;

const CarouselContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: auto;
  border: 3px solid black;
`;

const SliderContainer = styled.div`
  .slick-dots li button:before {
    color: white;
  }

  .slick-dots li.slick-active button:after {
    color: white;
  }

  .slick-dots li.slick-active button:before {
    opacity: 1;
    color: #fff;
  }
`;

export const LandingComponent = () => {
  const settings = {
    dots: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

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

        <CarouselContainer>
          <SliderContainer>
            <Slider {...settings}>
              <div>
                <CarouselImage src={CarouselImg1} alt="carouselImg1" />
              </div>
              <div>
                <CarouselImage src={CarouselImg2} alt="carouselImg2" />
              </div>
              <div>
                <CarouselImage src={CarouselImg3} alt="carouselImg3" />
              </div>
              <div>
                <CarouselImage src={CarouselImg4} alt="carouselImg4" />
              </div>
            </Slider>
          </SliderContainer>
        </CarouselContainer>

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
          <FlipCardRow>
            <BlurTextContainer>
              We believe in the power of storytelling and its ability to connect
              people. We are dedicated to creating experiences that resonate
              with your audience, leaving a lasting impression that goes beyond
              the event.
            </BlurTextContainer>
          </FlipCardRow>
          <FlipCardColumn>
            <FlipCard text={"Give"} frontImage={img1} />
            <FlipCard text={"Us"} frontImage={img2} />
            <FlipCard text={"Your"} frontImage={img3} />
            <FlipCard text={"Inspire"} frontImage={img4} />
          </FlipCardColumn>
          <FlipCardRow>
            <BlurTextContainer>
              We believe in the power of storytelling and its ability to connect
              people. We are dedicated to creating experiences that resonate
              with your audience, leaving a lasting impression that goes beyond
              the event.
            </BlurTextContainer>
          </FlipCardRow>
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
