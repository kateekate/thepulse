import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./assets/styles/theme";
import { LandingComponent } from "components/LandindComponent/LandindComponent";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LandingComponent />
    </ChakraProvider>
  );
}

export { App };
