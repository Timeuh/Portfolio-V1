import {getLangageColor} from "../../services/ProjectsData.js";

function ProjectCard({techs, image, name}) {

    return (
        <div>
            <img src={image} alt={name}/>
            <div>
                {
                    techs.map((tech) => {
                        let color = getLangageColor(tech);
                        return (
                            <span className={color}>{tech}</span>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ProjectCard;