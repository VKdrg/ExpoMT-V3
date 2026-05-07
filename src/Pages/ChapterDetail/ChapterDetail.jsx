import { useEffect, useRef, useState } from "react";
import { UseApplication } from "../../Components/Provider/Provider";

import "./ChapterDetail.css";


export const ChapterDetail = ({ setModal }) => {
    const { icon, setIcon, chapters, currentChapter } = UseApplication();

    function handleClick() {
        setModal(prev => !prev);
    }

    useEffect(() => {
        setIcon('/SVG/logoLightReduced.svg');
        document.getElementById('menu').style.color = "var(--beige)";
    }, [])

    return (
        <section id="chapter-detail">
            <div id="titles">
                <h2>{chapters[Number(currentChapter)].title}</h2>
                <h3>{chapters[Number(currentChapter)].subtitle}</h3>
            </div>

            <div id="audio-div">
                <audio id="audio"
                    controls
                    controlsList="nodownload"
                    title="Écouter l'histoire"
                >
                    <source src={`${chapters[Number(currentChapter)].audio}`} type="audio/mp3" />
                </audio>
            </div>

            <p className="quotes">{chapters[Number(currentChapter)].quote}</p>

            <div id="columns-content">
                <p>{chapters[Number(currentChapter)].content.col1}</p>
                <p>{chapters[Number(currentChapter)].content.col2}</p>
                <p>{chapters[Number(currentChapter)].content.col3}</p>
            </div>

            <div className='div-btn-close'>
                <button className="btn btn-close" onClick={handleClick}>Fermer</button>
            </div>
        </section>
    )
}