import { ChakraProvider } from "@chakra-ui/react";
import { AboutSection } from "./components/Body/AboutSection";
// import { AppsIntro } from "./components/Body/AppsIntro";
// import { AppsDisplay } from "./components/Body/AppsDisplay";
import customTheme from "./Theme";
// import { SkillsIntro } from "./components/Body/SkillsIntro";
import { SkillsDisplay } from "./components/Body/SkillsDisplay";
import { ContactSection } from "./components/Body/ContactSection";
import { ModernNavBar } from "./components/Header/ModernNavBar";
import { TopButton } from "./components/DataDisplay/Buttons/TopButton";

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      {/* Redo some html semantic elements */}
      <ModernNavBar />
      <AboutSection />
      {/* <AppsIntro /> */}
      {/* <AppsDisplay /> */}
      {/* <SkillsIntro /> */}
      <SkillsDisplay />
      <ContactSection />
      <TopButton />
      {/* TODO: Footer (Made w/ Love) */}
    </ChakraProvider>
  );
}

export default App;
