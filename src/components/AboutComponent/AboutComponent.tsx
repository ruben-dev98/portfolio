import { aboutMe, moreAboutMe } from "../../assets/assets";

const AboutComponent = () => {
    return (
        <section>
            {aboutMe}
            Donde encontrarme: 
            ICONO GITHUB - <a href={moreAboutMe.github}>{moreAboutMe.github}</a>
            ICONO LINKEDIN - <a href={moreAboutMe.linkedin}>{moreAboutMe.linkedin}</a>
        </section>
    )
}

export default AboutComponent;