import { Navbar } from '../../components/navbar/Navbar'
import { Header } from '../../components/header/header'
import { Story } from '../../features/story/Story'
import { Suggest } from '../../features/suggestPeople/Suggest'
import style from './home.module.scss'

export const Home = () => {
    return (
        <main>
            <section className={style.header}>
                <Header />
            </section>

            <section className={style.navbar}>
                <Navbar />
            </section>
            
            <section className={style.feed}>
                <Story />
            </section>

            <section className={style.suggest} >
                <Suggest />
            </section>
        </main>
    )
}