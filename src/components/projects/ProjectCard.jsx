import {getLangageColor} from "../../services/ProjectsData.js";

function ProjectCard({techs, image, name, borderColor, textColor, projectLink}) {

    return (
        <a href={projectLink} className={`space-y-4 bg-black bg-opacity-30 flex flex-col items-center justify-center w-1/2 h-full 
                rounded-md ${borderColor} border-2 py-8 hover:bg-white hover:bg-opacity-20 hover:transition`}>
            <h1 className={`text-center text-3xl ${textColor}`}>{name}</h1>
            <img src={image} alt={name} width="300" height="300"/>
            <div className="text-center flex-wrap mx-8">
                {techs.map((tech, i) => {
                    let color = getLangageColor(tech);
                    return (
                        <span key={i} className={`${color} p-2 m-2  rounded-md whitespace-nowrap`}>{tech}</span>
                    );
                })}
            </div>
        </a>
    );
}

export default ProjectCard;