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

    useEffect(() => {
        console.log(playingTransition);
    }, [])

    return (
        <>
            {playingTransition && <Transition />}
            <section id='chapter-cover'>
                <h2>{chapters[currentChapter].title}</h2>
                <h3>{chapters[currentChapter].subtitle}</h3>
                <div className='div-btn-next'>
                    <button className="btn btn-next" onClick={handleClick}>Continuer</button>
                </div>
            </section>
        </>
    )
}