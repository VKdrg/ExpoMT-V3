import { UseApplication } from "../../Components/Provider/Provider";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import "./ChapterItem.css";

export const ChapterItem = ({ setModal }) => {
    const nav = useNavigate()
    const { setPlayingTransition, chapters, currentChapter, setCurrentChapter } = UseApplication();

    function handleDiscovery() {
        setModal(prev => !prev);
    }

    function handleClick() {
        console.log(currentChapter);
        setCurrentChapter(prev => prev + 1)
        setPlayingTransition(true)
        if (currentChapter === 5) {
            nav('/redirect')
        } else {
            const id = Number(currentChapter) +1
            nav('/chapter/' + id)
        }
    }

    console.log('HIYA');


    return (
        <section id="chapter-item">
            <div className="div-btn-discover">
                <button className="btn btn-discover" onClick={handleDiscovery}>Découvrir</button>
            </div>
            <div className='div-btn-next'>
                {/* <Link className="btn btn-next" to={{ pathname: '/chapter/' + (Number(currentChapter)+1)}}>Continuer</Link> */}
                <button className="btn btn-next" onClick={handleClick}>Continew</button>
            </div>
            <video
                id="illu-desktop"
                autoPlay
                loop
                muted
            >
                <source src={chapters[currentChapter].illuDesktop} />
            </video>
        </section >
    )
}