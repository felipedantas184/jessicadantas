import React, { useState } from 'react'
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';
import video from '../../assets/videos/pexels.mp4';
import { Button } from '../ButtonElements';

import './styles.css';

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    
    return (
        <div className="heroContainer" id="home">
            <div className="heroBg">
                <video src={video} className="videoBg" autoPlay loop muted typeof='video/mp4'/>
            </div>
            <div className="heroContent" >
                <h1 className="heroH1" >Arquitetura e Design</h1>
                <p className="heroP" >
                    Soluções inovadoras buscando sempre a excelência e a satisfação do cliente
                </p>
                <div className="heroBtnWrapper">
                <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true}  offset={20}
                >
                    Conhecer {hover ? <MdArrowForward/> : <MdKeyboardArrowRight/>}
                </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
