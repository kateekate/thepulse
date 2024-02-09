import styled from "styled-components";

export const LandingComponent = () => {
  const Header = styled.h1`
    position: absolute;
    top: 15vw;
    left: 50%;
    transform: translate(-50%, -50%);
    color: red;
    z-index: -10;
    font-size: 35vw;
    font-weight: 800;
    text-transform: uppercase;
  `;

  const SubHeader = styled.h2`
    font-size: 1.5vw;
    text-transform: uppercase;
  `;

  const Text = styled.p`
    font-size: 4vw;
    text-transform: uppercase;
    font-weight: 600;
  `;

  const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25vw;
    gap: 40px;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  `;

  const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 40px 0 40px;
    gap: 40px;
  `;

  const VideoContainer = styled(DescriptionContainer)`
    justify-content: center;
    padding: 0;
    gap: 0;
  `;

  return (
    <div>
      <Header>Pulse</Header>
      <MainContainer>
        <TextContainer>
          <SubHeader>From Concept to Creation</SubHeader>
          <Text>Innovate. Illuminate. Inspire.</Text>
        </TextContainer>

        <DescriptionContainer>
          <p>
            From corporate branding to bespoke event themes, our portfolio
            showcases a spectrum of imaginative solutions tailored to elevate
            your brand&apos;s identity and engage your audience like never
            before.
          </p>
          <p>
            Explore our design philosophy that merges aesthetics with
            functionality, creating visually stunning and impactful designs that
            speak volumes.
          </p>
          <p>
            Discover how we bring events to life through immersive experiences,
            meticulous planning, and flawless execution, setting new benchmarks
            in the industry.
          </p>
        </DescriptionContainer>

        <VideoContainer>
          <p>Video 1</p>
          <p>Video 2</p>
        </VideoContainer>
      </MainContainer>
    </div>
  );
};
