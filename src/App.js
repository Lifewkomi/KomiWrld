import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'
import { dark } from './Styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Home from './Sections/Home';
import About from './Sections/About';

function App() {

  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />

      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options = {{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
          <main data-scroll-container ref={containerRef}>
            <Home/>
            <About/>
            
          </main>
          </AnimatePresence>
          
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;