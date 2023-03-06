import icon from "../../public/icons/icon.png";

function Navbar() {

    return (
        <div id="navbar" className="navbar">
            <div className="flex flex-row space-x-4 items-center w-1/2">
                <img src={icon} alt='image' width="70" height="70"/>
                <h1>Timothée Brindejonc</h1>
            </div>
            <div className="2xl:flex flex-row 2xl:space-x-12 items-center grid grid-cols-3 gap-x-12">
                <a href="#intro" className="navbar-item text-martinique-500">Intro</a>
                <a href="#about" className="navbar-item text-monza-400">A propos</a>
                <a href="#skills" className="navbar-item text-fuel-yellow-300 pl-2">Compétences</a>
                <a href="#projects" className="navbar-item text-bleached-cedar-400">Projets</a>
                <a href="#contact" className="navbar-item text-thunder-400">Contact</a>
            </div>
        </div>
    );
}

export default Navbar;
