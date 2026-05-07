import { Link } from "react-router";
import "./Error404.css";

export const Error404 = () => {

    return (
        <section id="error404">
            <h1>Error 404</h1>
            <h3>Page introuvable</h3>
            <Link className="btn" to={{pathname : '/'}}>Retour</Link>
        </section>
    )
}