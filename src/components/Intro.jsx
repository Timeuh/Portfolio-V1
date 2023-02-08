import image from '../../public/icon.png';

function Intro() {

    return (
        <div id="intro">
            <h1>Portfolio de Timothée Brindejonc</h1>
            <p>Description</p>
            <img src={image} alt='image' width="50" height="50"/>
        </div>
    );
}

export default Intro;