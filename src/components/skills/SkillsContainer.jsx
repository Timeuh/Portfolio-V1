import SkillsList from "./SkillsList.jsx";
import {interestTechs} from "../../services/LinksData.js";

function SkillsContainer({border, bg_from, bg_to, skill_titles}) {

    return (
        <div className="flex justify-center h-full">
            <div className={`h-full w-4/6  rounded-md py-8 border-2 items-center ${border}
                        bg-gradient-to-r ${bg_from} ${bg_to}`}>
                <h1 className="text-3xl pb-4">Technologies qui m'intéressent</h1>
                <SkillsList techs={interestTechs}/>
                <div className="justify-around flex flex-row pt-4 font-bold">
                    {skill_titles.map((title, i) => {
                        return (
                            <h1 className="w-20" key={i}>{title}</h1>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default SkillsContainer;
