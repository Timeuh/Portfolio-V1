import image from '../../public/icon.png';

function About() {

    return (
        <div>
            <p>Description</p>
            <img src={image} alt='image' width="50" height="50"/>
        </div>
    );
}

export default About;