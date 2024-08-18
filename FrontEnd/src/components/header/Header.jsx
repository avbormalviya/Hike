import style from './header.module.scss'

export const Header = () => {
    return (
        <header>
            <h1>PIXR</h1>
            <section>
                <span className="material-symbols-rounded">favorite</span>
                <span className="material-symbols-rounded">chat</span>
            </section>
        </header>
    )
}