function Skills() {

    return (
        <div id="skills" className="bg-thunder-700 w-full h-full text-center space-y-24">
            <h1 className="text-4xl text-monza-main pt-24">Au cours de mes années d'études, j'ai pu développer diverses
                compétences</h1>
            <div className="h-1/4 text-martinique-600">
                <div className="flex justify-center h-full">
                    <div className="h-full w-4/6  rounded-md py-8 border-2 items-center border-martinique-600
                        bg-gradient-to-r from-fuel-yellow-main to-fuel-yellow-300">
                        <h1 className="text-3xl pb-4">Outils maîtrisés</h1>
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
            <div className="h-1/4 text-bleached-cedar-main">
                <div className="flex justify-center h-full">
                    <div className="h-full w-4/6  rounded-md py-8 border-2 items-center border-bleached-cedar-main
                        bg-gradient-to-r from-monza-400 to-monza-200">
                        <h1 className="text-3xl pb-4">Technologies maîtrisés</h1>
                        <div className="font-bold justify-around flex flex-row items-center">
                            <a href="">
                                <img src="../../public/icons/html.png" alt="Git" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/css.png" alt="Github" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/javascript.png" alt="Jetbrains" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/php.png" alt="Oracle DB" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/c.png" alt="MySQL" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                            <a href="">
                                <img src="../../public/icons/java.png" alt="MariaDB" width="100" height="100"
                                     className="hover:skills-icon-hover"/>
                            </a>
                        </div>
                        <div className="justify-around flex flex-row pt-4 font-bold">
                            <h1 className="w-20">Html</h1>
                            <h1 className="w-20">Css</h1>
                            <h1 className="w-20">Javascript</h1>
                            <h1 className="w-20">Php</h1>
                            <h1 className="w-20">C</h1>
                            <h1 className="w-20">Java</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
