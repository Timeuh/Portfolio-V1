import SkillsList from "./SkillsList.jsx";

function SkillsContainer({border, bg_from, bg_to, skill_titles, techs, title}) {

    return (
        <div className="flex justify-center h-full">
            <div className={`h-full 2xl:w-4/6 w-5/6  rounded-md py-8 border-2 items-center ${border}
                        bg-gradient-to-r ${bg_from} ${bg_to}`}>
                <h1 className="text-3xl pb-4">{title}</h1>
                <SkillsList techs={techs}/>
                <div className="justify-around 2xl:flex 2xl:flex-row hidden pt-4 font-bold">
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
