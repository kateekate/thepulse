import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import { theme } from "./assets/styles/theme";
import { LandingComponent } from "components/LandindComponent/LandindComponent";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ParallaxProvider>
        <LandingComponent />
      </ParallaxProvider>
    </ChakraProvider>
  );
}

export { App };
