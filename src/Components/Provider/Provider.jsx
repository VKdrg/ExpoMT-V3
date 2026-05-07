import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const UseApplication = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('UseApplication must be used in a Provider');
    return context;
}

export const AppProvider = ({ children }) => {
    const [icon, setIcon] = useState('/SVG/logoLightReduced.svg');
    const [loading, setLoading] = useState(true);
    const [chapters, setChapters] = useState({});
    const [playing, setPlaying] = useState(true);
    const [playingTransition, setPlayingTransition] = useState(true);
    const [currentChapter, setCurrentChapter] = useState(1);
    const [audioURL, setAudioURL] = useState(``);
    const [menuBurger, setMenuBurger] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('/SiteContent.json')
            .then(res => res.json())
            .then(data => setChapters(data.chapters))
            .catch(err => console.error(`Error : ${err}`))
    }, []);

    return (
        <AppContext.Provider value={{ icon, setIcon, menuBurger, setMenuBurger, chapters, playing, setPlaying, playingTransition, setPlayingTransition, currentChapter, setCurrentChapter, audioURL, setAudioURL }}>
            {children}
        </AppContext.Provider>
    )
}