import {getLangageColor} from "../../services/ProjectsData.js";

function ProjectCard({techs, image, name}) {

    return (
        <div>
            <img src={image} alt={name} width="200" height="200"/>
            <div>
                {techs.map((tech, i) => {
                    let color = getLangageColor(tech);
                    return (
                        <span key={i} className={color}>{tech}</span>
                    );
                })}
            </div>
        </div>
    );
}

export default ProjectCard;