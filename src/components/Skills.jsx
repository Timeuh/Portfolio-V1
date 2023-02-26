function Skills() {

    return (
        <div id="skills" className="bg-thunder-700 w-full h-full text-center space-y-24">
            <h1 className="text-4xl text-monza-main pt-24">Au cours de mes années d'études, j'ai pu développer diverses
                compétences</h1>
            <div className="h-1/4 text-martinique-600">
                <h1 className="text-3xl py-4">Outils maîtrisés</h1>
                <div className="flex justify-center h-full">
                    <div
                        className="h-full w-4/6  rounded-md py-16 border-2 items-center bg-fuel-yellow-main border-martinique-600">
                        <div className="font-bold justify-around flex flex-row items-center">
                            <a href="#intro">
                                <img src="../../public/icons/bash.png" alt="Bash" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/linux.png" alt="Linux" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/windows.png" alt="Windows" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/git.png" alt="Git" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/github.png" alt="Github" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/jetbrains.png" alt="Jetbrains" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/oracle.png" alt="Oracle DB" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/mysql.png" alt="MySQL" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/mariadb.png" alt="MariaDB" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                        </div>
                        <div className="justify-around flex flex-row pt-4 font-bold">
                            <h1 className="w-20">Bash</h1>
                            <h1 className="w-20">Linux</h1>
                            <h1 className="w-20">Windows</h1>
                            <h1 className="w-20">Git</h1>
                            <h1 className="w-20">Github</h1>
                            <h1 className="w-20">Jetbrains</h1>
                            <h1 className="w-20">Oracle DB</h1>
                            <h1 className="w-20">MySQL</h1>
                            <h1 className="w-20">MariaDB</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
