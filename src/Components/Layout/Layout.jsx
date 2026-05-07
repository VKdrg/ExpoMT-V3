import './Layout.css';

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router";
import { Header } from "../Header/Header";
import { MenuItem } from "../MenuItems/MenuItems";
import { UseApplication } from '../Provider/Provider';

export const Layout = () => {

    const { chapters, menuBurger, setMenuBurger } = UseApplication();

    function triggerMenu() {
        setMenuBurger(prev => !prev);
    }

    return (
        <>
            {menuBurger ?
                <div className="modal">
                    <Link className="body1" id='closeMenu' onClick={triggerMenu}>FERMER</Link>
                    <h3>CHAPITRES</h3>
                    <div id='list'>
                        {chapters.map(c => <MenuItem key={c.id} chapter={c} />)}
                    </div>
                    <div id="btm-links">
                        <Link to="/mentions-legales">Mentions Légales</Link>
                        <Link to="https://fondation-solacroup-hebert.com/">Site de la Fondation</Link>
                        <div id='socials'>
                            <Link to="https://www.instagram.com/fondationsolacrouphebert/"><img src="/SVG/logo-Insta.svg" alt="Logo Instagram" /></Link>
                            <Link to="https://www.facebook.com/fondationsolacrouphebert/"><img src="/SVG/logo-Fb.svg" alt="logo Facebook" /></Link>
                            <Link to="https://www.youtube.com/@FondationSolacroupHebert"><img src="/SVG/logo-Yt.svg" alt="logo Youtube" /></Link>
                            <Link to="https://fr.linkedin.com/company/fondation-solacroup-h%C3%A9bert"><img src="/SVG/logo-in.svg" alt="logo Linkedin" /></Link>
                        </div>
                    </div>
                </div>
                :
                <>
                    <Header triggerMenu={triggerMenu} />
                    <Outlet />
                </>
            }
        </>
    )
}