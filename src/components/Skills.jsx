import SkillsContainer from "./skills/SkillsContainer.jsx";
import {interestTechsTitles, knownTechsTitles, knownToolsTitles} from "../services/LinksTitles.js";
import {interestTechs, knownTechs, knownTools} from "../services/LinksData.js";

function Skills() {

    return (
        <div id="skills" className="bg-thunder-700 w-full h-full text-center space-y-24">
            <h1 className="2xl:text-4xl text-3xl text-monza-main 2xl:pt-24 pt-8">Au cours de mes années d'études, j'ai
                pu développer diverses
                compétences</h1>
            <div className="2xl:h-1/4 text-martinique-600">
                <SkillsContainer border={"border-martinique-600"} bg_from={"from-fuel-yellow-main"}
                                 bg_to={"to-fuel-yellow-300"} skill_titles={knownToolsTitles} techs={knownTools}
                                 title={"Outils maîtrisés"}/>
            </div>
            <div className="2xl:h-1/4 text-bleached-cedar-main">
                <SkillsContainer border={"border-bleached-cedar-main"} bg_from={"from-monza-400"}
                                 bg_to={"to-monza-200"} skill_titles={knownTechsTitles} techs={knownTechs}
                                 title={"Technologies maîtrisées"}/>
            </div>
            <div className="2xl:h-1/4 text-fuel-yellow-main pb-24">
                <SkillsContainer border={"border-fuel-yellow-main"} bg_from={"from-bleached-cedar-main"}
                                 bg_to={"to-bleached-cedar-700"} skill_titles={interestTechsTitles}
                                 techs={interestTechs}
                                 title={"Technologies qui m'intéressent"}/>
            </div>
        </div>
    );
}

export default Skills;
