import { UseApplication } from "../../Components/Provider/Provider";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";

import "./ChapterItem.css";

export const ChapterItem = ({ setModal }) => {
    const nav = useNavigate()
    const { setPlayingTransition, chapters, currentChapter, setCurrentChapter } = UseApplication();

    const [width, setWidth] = useState(window.innerWidth)

    // const handleResize = () => {
    //     setWidth(window.innerWidth)
    //     if (window.innerWidth < 1024) {
    //         console.log('smol screen');
    //         document.getElementById('illu-desktop').src = `${chapters[currentChapter].illuMobile}`;
    //     } else {
    //         document.getElementById('illu-desktop').src = `${chapters[currentChapter].illuDesktop}`;
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener("resize", handleResize)
    //     return () => window.removeEventListener('resize', handleResize)
    // }, [])

    function ResponsiveContent() {
        const [url, setUrl] = useState('');

        useEffect(() => {
            const mql = window.matchMedia('(max-width: 1024px)');

            // Initial check
            const updateUrl = (e) => {
                setUrl(e.matches ? `${chapters[currentChapter].illuMobile}` : `${chapters[currentChapter].illuDesktop}`);
            };

            updateUrl(mql);
            mql.addEventListener('change', updateUrl);

            return () => mql.removeEventListener('change', updateUrl);
        }, []);

        return (
            <video
                id="illu-desktop"
                autoPlay
                loop
                muted
                src={url}
                style={{
                    zIndex: 2
                }}
            />
        )
    }


    function handleDiscovery() {
        setModal(prev => !prev);
    }

    function handleClick() {
        setCurrentChapter(prev => prev + 1)
        setPlayingTransition(true)
        if (currentChapter === 5) {
            nav('/#/redirect')
        } else {
            const id = Number(currentChapter) + 1
            nav('/chapter/' + id)
        }
    }

    return (
        <section id="chapter-item">
            <div className="div-btn-top">
                <button className="btn-top" onClick={handleDiscovery}>Découvrir</button>
            </div>
            <div className='div-btn-main'>
                <button className="btn" id="btn-next" onClick={handleClick}>Continuer</button>
            </div>
            <ResponsiveContent />
        </section >
    )
}