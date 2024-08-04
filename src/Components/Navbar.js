import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';


const NavContainer = styled(motion.div)`
width: 100vw;
z-index: 5;
position: absolute;
top: ${props => props.click ? '0' : `-${props.theme.navHeight}` };
display: flex;
justify-content: center;
align-items: center;
transition: all 1s ease;
`

const MenuItems = styled(motion.li)`
position: relative;
height: ${props => props.theme.navHeight};
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
padding: 0 10rem;

  @media screen {
    padding: 0;
  }
`

const MenuBtn = styled.li`
/* background-color: ${props => `rgba(${props.theme.textRgba},0.7)`}; */
background-color: ${props => props.theme.menubutton};
list-style-type: style none;
color: ${props => props.theme.body};

clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
position: absolute;
top: 100%;
left: 50%;
transform: translateX(-50%);
width: 15vw;
height: 2.1rem;
display: flex;
justify-content: center;
align-items: center;
font-size: ${props => props.theme.fontsm};
font-weight: 600;
text-transform: uppercase;
cursor: pointer;
`

const MenuItem = styled(motion.li)`
text-transform: uppercase;
color: ${props => props.theme.text};
cursor: pointer;
`
  
const Navbar = () => {
    const [click, setClick] = useState(false)
  return (
    <NavContainer
      click={click}
      initial={{
        y: "-100%",
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 2,
        delay: 2,
      }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{
          top: 0,
          bottom: 70,
        }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Gallery
        </MenuItem>
        <MenuItem
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Info
        </MenuItem>
      </MenuItems>
    </NavContainer>
  );
}

export default Navbar;