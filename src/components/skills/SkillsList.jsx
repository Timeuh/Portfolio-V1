function SkillsList({techs}) {

    return (
        <div className="font-bold justify-around 2xl:flex 2xl:flex-row grid grid-cols-2
            justify-items-center items-center">
            {techs.map((tech, i) => {
                return (
                    <a href={tech.link} key={i}>
                        <img src={tech.src} alt={tech.alt} width="100" height="100"
                             className="hover:skills-icon-hover py-2 2xl:py-0"/>
                    </a>
                );
            })}
        </div>
    );
}

export default SkillsList;
