import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles';
import { dark } from './Styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Home from './Sections/Home';
import About from './Sections/About';
import Loader from './Components/Loader';

function App() {
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{ smooth: true }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
            {!loaded && <Loader />}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <main className='App' data-scroll-container ref={containerRef}>
              <Home />
              {/* <About /> */}
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
