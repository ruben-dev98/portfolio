import { aboutMe } from "../../assets/assets";
import React from 'react';

interface AboutComponentProps {
    children: React.ReactElement;
}

const AboutComponent = ({children}: AboutComponentProps) => {
    return (
        <>
            <h1 id="about">Sobre Mí</h1>
            <section>
                <p>{aboutMe}</p>
            </section>
            {children}
        </>
    )
}

export default AboutComponent;