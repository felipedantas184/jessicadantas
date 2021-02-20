import React, { useState } from 'react';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import InfoSection from '../../components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../../components/InfoSection/Data';
import Navbar from '../../components/NavBar';
import Services from '../../components/ServicesSection';
import Sidebar from '../../components/SideBar';

function Landing() {
    const [isOpened, setIsOpened] = useState(false);

    const toggle = () => {
        setIsOpened(!isOpened);
    }

    return (
        <div>
            <Navbar 
            toggle={toggle}
            />
            <Sidebar 
            isOpened={isOpened}
            toggle={toggle}
            />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <Services />
            <InfoSection {...homeObjThree} />
            <Footer />
        </div>
    );
}

export default Landing;