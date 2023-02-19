import image from "../../public/icon.png";

function Navbar() {

    return (
        <div id="navbar" className="navbar">
            <div className="flex flex-row space-x-4 items-center">
                <img src={image} alt='image' width="70" height="70"/>
                <h1>Timothée Brindejonc</h1>
            </div>
            <div className="flex flex-row space-x-12 items-center">
                <a href="#intro">Intro</a>
                <a href="#about">A propos</a>
                <a href="#skills">Compétences</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
