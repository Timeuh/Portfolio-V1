function SkillsList({techs}) {

    return (
        <div className="font-bold justify-around flex flex-row items-center">
            {techs.map((tech, i) => {
                return (
                    <a href={tech.link} key={i}>
                        <img src={tech.src} alt={tech.alt} width="100" height="100"
                             className="hover:skills-icon-hover"/>
                    </a>
                );
            })}
        </div>
    );
}

export default SkillsList;
