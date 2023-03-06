import profile from '../../public/illustrations/pic_front.jpg';

function Intro() {

    return (
        <div id="intro" className="h-screen 2xl:bg-[url('/backgrounds/intro-bg.png')] 2xl:bg-cover bg-thunder-main
             text-fuel-yellow-main flex 2xl:flex-row-reverse flex-col-reverse 2xl:justify-around justify-center items-center">
            <div className="2xl:h-4/6 2xl:w-2/5 p-12 2xl:text-2xl">
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
            <div className="2xl:h-4/5 w-2/5 2xl:flex justify-center items-center py-8">
                <img src={profile} alt='me' height="400" width="400"
                     className="rounded-full border-2 border-fuel-yellow-main"/>
            </div>
        </div>
    );
}

export default Intro;
