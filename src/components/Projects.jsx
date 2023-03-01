import ProjectCard from "./projects/ProjectCard.jsx";
import {mastermind} from "../services/ProjectsData.js";
import mastermindIllu from "../../public/illustrations/IconSet.png";

function Projects() {

    return (
        <div id="projects" className="h-screen w-full flex flex-col justify-center bg-thunder-600">
            <div>
                <ProjectCard techs={mastermind} image={mastermindIllu} name="Mastermind"/>
            </div>
        </div>
    );
}

export default Projects;