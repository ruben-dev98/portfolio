import { aboutMe } from "../../assets/assets";
import React from 'react';

interface AboutComponentProps {
    children: React.ReactElement;
}

const AboutComponent = ({children}: AboutComponentProps) => {
    return (
        <>
            <h1>Sobre Mí</h1>
            <section id="about">
                <p>{aboutMe}</p>
            </section>
            {children}
        </>
    )
}

export default AboutComponent;