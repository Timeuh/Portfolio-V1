import {useState} from "react";

function ProjectCard({techs, image, name, borderColor, textColor, projectLink, description}) {

    const [hover, setHover] = useState(false);

    const handleEnter = () => {
        setHover(true);
    }

    const handleExit = () => {
        setHover(false);
    }

    return (
        <a href={projectLink} className={`space-y-4 bg-black bg-opacity-30 flex flex-col items-center justify-center 2xl:w-1/2 2xl:h-full 
                rounded-md ${borderColor} border-2 hover:transition relative w-3/4 my-8`}>
            <div className="h-full w-full absolute hover:bg-white hover:bg-opacity-80 transition text-justify flex flex-col justify-center
                 text-2xl p-8"
                 onMouseEnter={handleEnter} onMouseLeave={handleExit}>
                {hover ? description : ""}
            </div>
            <h1 className={`text-center text-3xl ${textColor}`}>{name}</h1>
            <img src={image} alt={name} width="300" height="300"/>
            <div className="text-center flex-wrap mx-8 flex flex-row space-x-4 justify-center">
                {techs.map((tech, i) => {
                    return (
                        <img key={i} src={tech.link} alt={tech.name} className="my-2"></img>
                    );
                })}
            </div>
        </a>
    );
}

export default ProjectCard;