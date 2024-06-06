import { aboutMe } from "../../assets/assets";

const AboutComponent = () => {
    return (
        <>
            <h1>Sobre Mí</h1>
            <section id="about">
                <p>{aboutMe}</p>
            </section>
        </>
    )
}

export default AboutComponent;