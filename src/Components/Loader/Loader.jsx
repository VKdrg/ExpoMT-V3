import { useEffect, useState } from 'react';
import './Loader.css';
import { UseApplication } from '../Provider/Provider';

export function Loader() {

    const { setPlaying } = UseApplication();

    const [loading, setLoading] = useState(true);
    const [filled, setFilled] = useState(0);

    useEffect(() => {
        if (filled < 100) {
            const timeout = setTimeout(() => {
                setFilled(prev => prev + 5);
            }, 20);
            return () => clearTimeout(timeout);
        }
    }, [filled]);

    useEffect(() => {
        if (filled >= 100) {
            setTimeout(() => {
                setPlaying(false);
            }, 1200);
        }
    }, [filled, setLoading]);

    return (
        <section id='loader-screen'>
            <div id='loader'>
                <div
                    id='progressbar'
                    style={{ width: `${filled}%` }}
                >
                </div>
            </div>
        </section>
    )
}