import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    background-color: #230529;
    position: fixed;

    nav {
        display: none;
        
        a {
            font-family: "Tiny5", sans-serif;
            padding: 12px;
            color: #fff;
            text-decoration: none;
            font-size: 1.5rem;
        }
    }
    
    @media (min-width: 1000px) {
        
        nav {
            margin: 0 0 0 30px;
            display: flex;
            align-items: center;
            justify-content: start;
            gap: 12px;
        }
    }
`;

const TitleStyled = styled.div`
    background-image: url('https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/bg.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 300px;
    padding: 16px 0 0 0;
    

    header {
        font-family: "Tiny5", sans-serif;
        text-align: center;
        color: #fff;
        text-transform: uppercase;
    }
    
    @media (min-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;

        header {
            margin: 0;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
    
`;

const DivStyled = styled.div`
    width: 150px;
    height: 150px;
    background-image: url("https://portfolio-image-s3.s3.eu-west-3.amazonaws.com/ruben.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    margin: 0 auto 16px auto;
    
    @media (min-width: 1000px) {
        margin: 0;
        display: block;
    }
`;

const HeaderComponent = () => {
    
    return (
        <>
            <HeaderStyled>
                <nav>
                    <a href="#about">Acerca</a>
                    <a href="#projects">Proyectos</a>
                    <a href="#studies">Estudios</a>
                    <a href="#experiences">Experiencia</a>
                    
                </nav>
            </HeaderStyled>
            <TitleStyled>
                <DivStyled></DivStyled>
                <header>
                    <h1>Rubén Dopico Novo</h1>
                    <p>Junior Fullstack Developer</p>

                </header>
            </TitleStyled>
        </>
    );
}

export default HeaderComponent;