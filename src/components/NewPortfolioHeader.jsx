export function NewPortfolioHeader() {
    return (
        <div id={'newPortfolio'} className={'w-full h-10 bg-green-400 flex flex-row items-center justify-center space-x-1'}>
            <h1 className={'text-xl text-fuel-yellow-900'}>Mon nouveau portfolio est en ligne ! Disponible sur</h1>
            <a href="https://portfolio.timeuh.fr/" className={'text-xl text-martinique-main'}>ce site</a>
        </div>
    )
}
