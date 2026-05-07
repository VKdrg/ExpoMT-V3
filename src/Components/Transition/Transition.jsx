import { UseApplication } from "../Provider/Provider";
import { useEffect, useRef } from "react";

import "./Transition.css";


export const Transition = () => {
    const transitionRef = useRef(null);
    const {playingTransition, setPlayingTransition} = UseApplication()

    // makes video play
    useEffect(() => {
        const timer = setTimeout(() => {
            if (transitionRef.current) {
                transitionRef.current.play();
            }
        }, 1);

        return () => clearTimeout(timer);
    })

    // should hide video after delay
    useEffect(() => {
        setTimeout(() => {
            setPlayingTransition(false)
        }, 10000);
    })

    console.log('DAMN LA TRANSITION');

    return (
        <section id="transition">
            <video
                ref={transitionRef}
                muted
                playsInline
            >
                <source src="/illus/transition.mp4" type="video/mp4" />
            </video>
        </section>
    )
}