import { useEffect, useState } from 'react';
import { UseApplication } from '../../Components/Provider/Provider';
import { Transition } from '../../Components/Transition/Transition';

import './ChapterCover.css';


export const ChapterCover = ({ setCover }) => {
    const { playingTransition, chapters, currentChapter } = UseApplication();

    function handleClick() {
        // sets Cover modal to its opposite => "activate" Item modal
        setCover(prev => !prev);
    }

    return (
        <>
            {playingTransition && <Transition />}
            <section id='chapter-cover'>
                <h2>{chapters[currentChapter].title}</h2>
                <h3>{chapters[currentChapter].subtitle}</h3>
                <div className='div-btn-main'>
                    <button className="btn-main" id='btn-item' onClick={handleClick}>Continuer</button>
                </div>
            </section>
        </>
    )
}