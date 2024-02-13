import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./assets/styles/theme";
import { LandingComponent } from "components/LandindComponent/LandindComponent";
import { ParallaxProvider } from "react-scroll-parallax"; // добавили импорт

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
