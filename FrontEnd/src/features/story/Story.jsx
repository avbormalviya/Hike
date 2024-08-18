import style from './story.module.scss'

export const Story = () => {
    return (
        <section className={style.story_wrapper}>
            <figure>
                <span className={style.imageHolder}>
                    {/* <img src="https://i.pinimg.com/564x/b6/45/00/b64500d4ef8920f79beade93ede6b34d.jpg" alt="" /> */}
                    <img src="https://i.pinimg.com/564x/41/4b/b8/414bb8ec3849e59b4d9a5637cb7dd2c0.jpg" alt="" />
                    <i className="material-symbols-rounded">add</i>
                </span>
                <figcaption>Your Story</figcaption>
            </figure>
        </section>
    )
}