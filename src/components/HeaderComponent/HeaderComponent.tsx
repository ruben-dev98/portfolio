import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    background-color: #f8f8f8;
    position: fixed;

    nav {
        display: flex;
        align-items: center;
        justify-content: start;
        gap: 12px;
    
        a {
            color: #444;
            text-decoration: none;
            font-size: 1.5rem;
        }
    }


`;


const HeaderComponent = () => {
    return (
        <HeaderStyled>
            <nav>
                <a href="#about">Sobre Mí</a>
                <a href="#projects">Proyectos</a>
                <a href="#contact">Contacto</a>
            </nav>
        </HeaderStyled>
    );
}

export default HeaderComponent;