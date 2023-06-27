import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import { dark } from "./styles/Themes";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Home from "./sections/Home";
import About from "./sections/About";
import { AnimatePresence } from "framer-motion";
import Projects from "./sections/Projects";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";
import Extra from "./sections/Extra";
import Skills from "./sections/Skills";
import Footer from "./sections/Footer";

function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            multiplier: 1.0,
            smartphone: {
              smooth: true,
              touchMultiplier: 3,
            },
            tablet: {
              touchMultiplier: 2,
              smooth: true,
            },
          }}
          watch={
            [
              //..all the dependencies you want to watch to update scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <ScrollTriggerProxy />
          <AnimatePresence>
            <main className="App" data-scroll-container ref={containerRef}>
              <Home />
              <About />
              <Projects />
              <Skills />
              <Extra />
              <Footer />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
