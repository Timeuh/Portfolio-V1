import profile from '../../public/pic_front.jpg';

function Intro() {

    return (
        <div id="intro"
             className="h-screen bg-[url('../../public/intro-bg.png')] bg-cover text-fuel-yellow-main flex flex-row-reverse justify-around items-center">
            <div className="h-4/6 w-2/5 p-12 text-2xl">
                <h1 className="text-3xl p-4 text-center text-monza-main">Bonjour !</h1>
                <div className="text-left space-y-8">
                    <p>Je suis Timothée, j'ai 20 ans et je suis étudiant en 2e année de BUT Informatique.</p>
                    <p>Ce site est mon portfolio, il présente
                        <a href="#about" className="text-monza-400 hover:font-bold transition"> mon parcours</a>,
                        <a href="#skills" className="text-fuel-yellow-300 hover:font-bold transition"> mes
                            compétences</a> et
                        <a href="#projects" className="text-bleached-cedar-400 hover:font-bold transition"> mes
                            réalisations</a>.
                    </p>
                    <p>Il est actualisé régulièrement avec mes nouvelles productions.</p>
                    <p className="text-monza-main">Bonne lecture !</p>
                </div>
            </div>
            <div className="h-4/5 w-2/5 flex justify-center items-center">
                <img src={profile} alt='me' height="400" width="400"
                     className="rounded-full border-2 border-fuel-yellow-main"/>
            </div>
        </div>
    );
}

export default Intro;
