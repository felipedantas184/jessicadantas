import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';

import './styles.css';

interface NavbarProps {
    toggle: any
}

const Navbar: React.FC<NavbarProps> = (props) => {
    const [scrollNav, setScrollNav] = useState(false)
    const changeNav = () => {
        if(window.scrollY >= 80) {
        setScrollNav(true)
        } else {
        setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <IconContext.Provider value={{ color: '#fff'}}>
            <nav className="nav" style={{background: scrollNav ? '#000' : 'transparent'}}>
                <div className="navbarContainer">
                    <LinkR to="/" onClick={toggleHome} className="navLogo">Jéssica Dantas</LinkR>
                    <div className="mobileIcon" onClick={props.toggle}>
                        <FaBars />
                    </div>
                    <ul className="navMenu">
                        <li className="navItem">
                            <NavLinks  to="about"
                            smooth={true} duration={500} spy={true} offset={20}
                            >
                                Descubra
                            </NavLinks>
                        </li>
                        <li className="navItem">
                            <NavLinks  to="discover"
                            smooth={true} duration={500} spy={true} offset={20}
                            >
                                Projetos
                            </NavLinks>
                        </li>
                        <li className="navItem">
                            <NavLinks  to="services"
                            smooth={true} duration={500} spy={true} offset={20}
                            >
                                Serviços
                            </NavLinks>
                        </li>
                        <li className="navItem">
                            <NavLinks  to="signup"
                                smooth={true} duration={500} spy={true} offset={20}
                            >
                                Sobre
                            </NavLinks>
                        </li>
                    </ul>
                    <nav className="navBtn">
                        <LinkR to="/singin" className="navBtnLink">Contato</LinkR>
                    </nav>
                </div>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar;

const NavLinks = styled(LinkS)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
    transition: all 0.1s ease-in-out
  }
`