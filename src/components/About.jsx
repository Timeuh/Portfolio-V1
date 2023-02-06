import image from '../../public/icon.png';

function About() {

    return (
        <>
            <p className='text-fuel-yellow-main'>Description</p>
            <img src={image} alt='image' className='w-24 h-24'/>
        </>
    );
}

export default About;