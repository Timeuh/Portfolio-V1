import image from '../../public/icon.png';

function About() {

    return (
        <div className='text-center flex flex-lig justify-center items-center self-center h-5/6 w-5/6'>
            <p className='text-fuel-yellow-main'>Description</p>
            <img src={image} alt='image' className='w-24 h-24'/>
        </div>
    );
}

export default About;