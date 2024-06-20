import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'
import { dark } from './Styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollTriggerProxy from './Components/ScrollTriggerProxy';

import Home from './Sections/Home';
import About from './Sections/About';
import Banner from './Sections/Banner';
import Gallery from './Sections/Gallery';



function App() {
  const containerRef = useRef(null);

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
        <ScrollTriggerProxy/>
          <AnimatePresence>
            <main className='App' data-scroll-container ref={containerRef}>
              <Home />
              <About /> 
              <Banner />
              <Gallery/>
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;