import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import '/src/index.css';
import './Header.css';
import { UseApplication } from '../Provider/Provider';



export const Header = ({ triggerMenu }) => {

    const { icon, setIcon } = UseApplication()
    const location = useLocation();

    useEffect(() => {
        console.log('DAMNLA COULEUUUR');
        if (location.pathname === "/") {
            setIcon('/SVG/logoLightExtended.svg');
        }
        else if ((location.pathname.includes("chapter")) || (location.pathname === "/redirect")) {
            setIcon('/SVG/logoDarkReduced.svg');
            document.getElementById('menu').style.color = "var(--dark-blue)";
        }
        else if(location.pathname === "/mentions-legales") {
            document.getElementById('nav').style.backgroundColor = "var(--dark-blue)";
        }
    }, [location]);

    return (
        <>
            <nav id='nav'>
                <Link to="/">
                    <img src={icon} alt="blason du chateau et logo de la fondation Solacroup-Hébert" />
                </Link>
                <Link id='menu' className='body1' onClick={triggerMenu}>MENU</Link>
            </nav>
        </>
    )
}

