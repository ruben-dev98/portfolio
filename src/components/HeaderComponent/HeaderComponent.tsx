import styled from "styled-components";

const HeaderStyled = styled.header`
    @media (min-width: 1000px) {
        width: 100%;
        background-color: #230529;
        position: fixed;

        nav {
            margin: 0 0 0 30px;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 12px;
        
            a {
                color: #fff;
                text-decoration: none;
                font-size: 1.5rem;
            }
        }
    }
`;

const TitleStyled = styled.div`
    @media (min-width: 1000px) {
        width: 100%;
        height: 300px;
        background-image: url('https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/bg.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;

        header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fff;
            text-transform: uppercase;
        }
    }
    
`;

const DivStyled = styled.div`
    @media (min-width: 1000px) {
        width: 150px;
        height: 150px;
        background-image: url("https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/ruben.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100%;
    }
`;

const HeaderComponent = () => {
    return (
        <>
            <HeaderStyled>
                <nav>
                    <a href="#about">Sobre Mí</a>
                    <a href="#projects">Proyectos</a>
                </nav>
            </HeaderStyled>
            <TitleStyled>
                <DivStyled></DivStyled>
                <header>
                    <h1>Rubén Dopico Novo</h1>
                    <p>Fullstack Developer</p>
                </header>
            </TitleStyled>
        </>
    );
}

export default HeaderComponent;