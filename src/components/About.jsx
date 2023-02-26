import picture from '../../public/illustrations/pic_side.jpg';
import graduation from '../../public/illustrations/graduation.jpg';
import frameworks from '../../public/illustrations/IconSet.png';
import webapp from '../../public/illustrations/web_app.png';

function About() {

    return (
        <div id="about"
             className="w-full bg-thunder-800 text-fuel-yellow-main text-xl h-full bg-[url('../../public/backgrounds/about-bg.png')] bg-cover">
            <div className="flex flex-row justify-around items-center h-1/4 py-8">
                <img src={picture} height="300" width="300" alt="me"
                     className="rounded-full border-2 border-fuel-yellow-main"/>
                <p className="w-2/6 text-right leading-8 pl-24">
                    Je suis <span className="text-monza-main font-bold">Timothée Brindejonc</span>, et comme je l'ai dit
                    plus haut, je suis
                    étudiant en <span className="text-monza-main font-bold"> 2e année de BUT informatique</span>.
                    Mon objectif à la fin de ma 3e année et avec le diplôme en poche, n'est pas encore défini.
                    J'hésite entre continuer les études avec un Master et entrer directement sur le marché du travail.
                </p>
            </div>
            <div className="flex flex-row-reverse justify-around items-center h-1/4 pb-12">
                <img src={graduation} height="300" width="300" alt="graduation"
                     className="rounded-full border-2 border-monza-main"/>
                <p className="w-2/6 my-4 leading-8">
                    Pour m'aider à décider quelle voie choisir après les études, je compte sur les différents
                    <span className="text-monza-main font-bold"> stages en entreprise</span> demandés dans le cadre du
                    BUT, ou bien sur une
                    <span className="text-monza-main font-bold"> potentielle 3e année en alternance</span>, qui sait ?
                    En fonction de mon ressenti sur l'expérience acquise, je me dirigerai alors vers la poursuite
                    d'étude
                    ou l'insertion professionnelle.
                </p>
            </div>
            <div className="flex flex-row justify-around items-center h-1/4 py-8">
                <img src={frameworks} height="300" width="300" alt="frameworks"
                     className="rounded-full border-2 border-monza-main"/>
                <p className="w-2/6 text-right pt-8 leading-8 pl-24">
                    Sinon, d'un point de vue développement je m'oriente vers le <span
                    className="text-monza-main font-bold"> fullstack </span>
                    avec une <span className="text-monza-main font-bold"> préférence pour le front-end</span> depuis que
                    j'ai commencé à apprendre
                    Javascript et que j'ai découvert <span
                    className="text-monza-main font-bold">Tailwind CSS</span> pour mes projets personnels.
                    J'ai pour vocation de <span className="text-monza-main font-bold">créer des applications</span> et
                    <span className="text-monza-main font-bold"> des sites web</span> complets et bien pensés, optimisés
                    et agréables pour les utilisateurs.
                </p>
            </div>
            <div className="flex flex-row-reverse justify-around items-center h-1/4 py-8">
                <img src={webapp} height="300" width="300" alt="web app"
                     className="rounded-full border-2 border-fuel-yellow-main"/>
                <p className="w-2/6 pt-8 leading-8">
                    C'est pour cela qu'en ce moment, j'ai pour objectif de travailler sur des
                    <span className="text-monza-main font-bold"> projets d'applications web</span> pour
                    approfondir mes compétences et mes connaissances, <span className="text-monza-main font-bold">surtout en javascript</span>.
                    Vous pourrez voir plus bas <span className="text-bleached-cedar-400 font-bold">mes différents projets</span>.
                </p>
            </div>
        </div>
    );
}

export default About;
