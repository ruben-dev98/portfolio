
import React from 'react';
import { stack } from './../../assets/assets';

const StackComponent = () => {
    return (
        <>
            <h1>Mis Conocimientos</h1>
            <section>
                {stack && stack.map((language, index) => {
                    return (
                        <p key={index}>
                            {language.name}
                            {React.createElement(language.icon)}
                        </p>
                    );
                })}
                {stack[0].icon}
            </section>
        </>

    );
}

export default StackComponent;