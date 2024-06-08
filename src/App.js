import { ThemeProvider } from 'styled-components';
import GlobalStyles from './Styles/GlobalStyles'
import { dark } from './Styles/Themes';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef } from 'react';
import Home from './Sections/Home';

import 'locomotive-scroll/dist/locomotive-scroll.css';

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
          <main data-scroll-container ref={containerRef}>
            <Home/>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;