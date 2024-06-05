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

const TitleStyled = styled.div<{ $bg?: string }>`
    width: 100%;
    margin: 0;
    padding: 0;
    height: 300px;
    background-image: url('https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    header {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #fff;
        text-transform: uppercase;
    }
`;


const HeaderComponent = () => {
    return (
        <>
            <HeaderStyled>
                <nav>
                    <a href="#about">Sobre Mí</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </HeaderStyled>
            <TitleStyled>
                <header>
                    <h1>Rubén Dopico Novo</h1>
                    <p>Fullstack Developer</p>
                </header>
            </TitleStyled>
        </>
    );
}

export default HeaderComponent;