import { aboutMe, moreAboutMe } from "../../assets/assets";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from '@mui/material';

const AboutComponent = () => {
    return (
        <section id="about">
            <h1>Sobre Mí</h1>
            <p>{aboutMe}</p>
            <p>
                Donde encontrarme:
                <p>
                    <Link href={moreAboutMe.github}><FaGithub /></Link>
                    <Link href={moreAboutMe.linkedin}><FaLinkedin /></Link>
                </p>
            </p>
        </section>
    )
}

export default AboutComponent;