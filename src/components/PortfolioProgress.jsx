import one from '../../public/progress/1-current.png';
import next from '../../public/progress/next.png';
import two from '../../public/progress/2-noclear.png';
import three from '../../public/progress/3-noclear.png';

export function PortfolioProgress() {
    return (
        <div className={'h-full w-full bg-martinique-300 flex flex-col items-center xl:h-screen'}>
            <h1 className={'text-center text-3xl text-monza-900 font-bold py-8 xl:text-4xl'}>Portoflio en rénovation !</h1>
            <p className={'p-8 text-gray-600 text-justify xl:w-1/2 xl:text-2xl'}>Ce portfolio ne me convenant plus, et ne reflétant plus mes compétences, je travaille sur un nouveau portfolio.
            Celui-ci reflétera mieux mes préférences en design et montrera plus d'animations pour signifier ma progression en front-end.
            En attendant sa parution, voici sa progression actuelle :</p>
            <div className={'w-full flex flex-col items-center xl:flex-row xl:h-1/2'}>
                <div className={'w-full h-1/5 flex flex-col items-center justify-between space-y-4 px-8 text-center text-fuel-yellow-700'}>
                    <img src={one} alt="step 1"/>
                    <h1 className={'text-2xl font-bold'}>Étape 1 : Design</h1>
                    <p>Design du portfolio, à l'aide de Figma</p>
                </div>
                <img src={next} alt="next" className={'w-20 h-20 my-8 rotate-90 xl:rotate-0'}/>
                <div className={'w-full h-1/5 flex flex-col items-center justify-between space-y-4 px-8 text-center text-monza-900'}>
                    <img src={two} alt="step 1"/>
                    <h1 className={'text-2xl font-bold'}>Étape 2 : Développement</h1>
                    <p>Développement du portfolio, avec React Js, Typescript, Eslint et Tailwind CSS</p>
                </div>
                <img src={next} alt="next" className={'w-20 h-20 my-8 rotate-90 xl:rotate-0'}/>
                <div className={'w-full h-1/5 flex flex-col items-center justify-between space-y-4 pb-8 px-8 text-center text-monza-900'}>
                    <img src={three} alt="step 1"/>
                    <h1 className={'text-2xl font-bold'}>Étape 3 : Déploiement</h1>
                    <p>Déploiement du portfolio du Firebase</p>
                </div>
            </div>
        </div>
    )
}