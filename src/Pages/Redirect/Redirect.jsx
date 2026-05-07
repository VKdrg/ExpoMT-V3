import { Link } from "react-router";
import { useEffect } from "react";
import { UseApplication } from "../../Components/Provider/Provider";

import "./Redirect.css";
import '/src/index.css'


export const Redirect = () => {

    const { setCurrentChapter } = UseApplication()

    useEffect(() => {
        setCurrentChapter(1)
    }, [])

    return (
        <section id="redirect-section">
            <div id="titles">
                <h2>Nos valeurs sont le coeur battant de la Fondation.</h2>
                <h3>Elles guident chaque action, chaque projet, et chaque réussite.</h3>
            </div>
            <Link className="btn body1" to="https://fondation-solacroup-hebert.com/">Retour vers le site principal.</Link>
        </ section>
    )
}