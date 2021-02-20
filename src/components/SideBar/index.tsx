import React, {useState} from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';

import './styles.css';

interface SidebarProps {
    isOpened?: boolean;
    toggle?: any;
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <aside
        className="sidebarContainer"
        style={
            {opacity: props.isOpened ? 1 : 0,
            top: props.isOpened ? 0 : '-100%'
            }}
        >
            <div className="icon">
                <FaTimes className="closeIcon" onClick={props.toggle}/>
            </div>
            <div className="sideWrapper">
                <ul className="sidebarMenu">
                    <LinkS to="about" className="sidebarLink" onClick={props.toggle}>Descubra</LinkS>
                    <LinkS to="discover" className="sidebarLink" onClick={props.toggle}>Projetos</LinkS>
                    <LinkS to="services" className="sidebarLink" onClick={props.toggle}>Serviços</LinkS>
                    <LinkS to="signup" className="sidebarLink" onClick={props.toggle}>Sobre</LinkS>
                </ul>
                <div className="sideBtnWrap">
                    <LinkR to="/" className="sidebarRoute">Contato</LinkR>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar;