import icon from '../../public/icon.png';

function About() {

    return (
        <div id="about" className="h-screen w-full bg-thunder-800 text-fuel-yellow-main">
            <img src={icon} height="200" width="200" alt="icon"/>
            <p>
                Je suis Timothée Brindejonc, et comme je l'ai dit plus haut, je suis étudiant en 2e année
                de BUT informatique. Mon objectif à la fin de ma 3e année et avec le diplôme en poche, n'est
                pas encore défini. J'hésite entre continuer les études avec un Master et entrer directement
                sur le marché du travail.
            </p>
            <p>
                Pour m'aider à décider quelle voie choisir après les études, je compte sur les différents stages
                en entreprise demandés dans le cadre du BUT, ou bien sur une potentielle 3e année en alternance, qui
                sait ?
                En fonction de mon ressenti sur l'expérience acquise, je me dirigerai alors vers la poursuite d'étude
                ou l'insertion professionnelle.
            </p>
            <p>
                Sinon, d'un point de vue développement je m'oriente vers le fullstack avec une préférence pour le
                front-end
                depuis que j'ai commencé à apprendre Javascript et que j'ai découvert Tailwind CSS pour mes projets
                personnels.
                J'ai pour vocation de créer des applications et des sites web complets et bien pensés, optimisés et
                agréables pour
                les utilisateurs.
            </p>
            <p>
                C'est pour cela qu'en ce moment, j'ai pour objectif de travailler sur des projets d'applications web
                pour
                approfondir mes compétences et mes connaissances, surtout en javascript. Vous pourrez voir plus bas mes
                différents projets.
            </p>
        </div>
    );
}

export default About;
