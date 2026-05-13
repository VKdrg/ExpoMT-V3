import { useEffect, useRef } from "react";
import { Link } from 'react-router';
import { Loader } from '../Components/Loader/Loader';
import { UseApplication } from '../Components/Provider/Provider';
import './Home.css';

function DelayedVideo() {
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <video
            ref={videoRef}
            muted
            playsInline
        >
            <source src="/illus/Animation-clin-d-oeil.mp4" type="video/mp4" />
        </video>
    );
}

export const Home = () => {

    const { playing, setCurrentChapter, currentChapter } = UseApplication();

    useEffect(() => {
        setCurrentChapter(1)
    }, [])

    return (
        <>
            {playing && <Loader />}
            <section id='landing-screen'>
                <div className='titles'>
                    <h1>Marie-Thérèse<br />SOLACROUP</h1>
                    <p>UNE VIE AU SERVICE DES AUTRES</p>
                </div>
                <div className='div-btn-main'><Link className='btn-main' id="btn-chapter" to={{pathname: '/chapter/'+ currentChapter }}>Continuer</Link></div>
                <DelayedVideo />
            </section>
        </>
    )
}