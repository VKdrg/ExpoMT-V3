import { UseApplication } from "../Provider/Provider";
import { Link } from "react-router";
import { useEffect } from "react";

import './MenuItems.css';


export const MenuItem = ({ chapter }) => {

    const { setCurrentChapter, setMenuBurger, setPlayingTransition } = UseApplication()

    const handleClick = () => {
        console.log(chapter.id);
        setCurrentChapter(chapter.id)
        setMenuBurger(false)
        setPlayingTransition(false)
    }

    return (
        <Link onClick={handleClick} to={{ pathname: `/chapter/${chapter.id}`, state: chapter }} className="links">
            <p className="ChNb">{chapter.id}</p>
            <p className="p-thin">{chapter.title}</p>
        </Link>
    )
}