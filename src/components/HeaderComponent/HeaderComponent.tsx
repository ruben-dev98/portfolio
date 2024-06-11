import styled from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    background-color: #230529;
    position: fixed;

    nav {
        display: none;
        a {
            padding: 0 12px 0 0;
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
    

    header {
        text-align: center;
        margin: 0 auto;
        display: inline-block;
        vertical-align: middle;
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
    display: inline-block;
    vertical-align: middle;
    margin: 0 30px;
    
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
                    <a href="#about">Sobre Mí</a>
                    <a href="#projects">Proyectos</a>
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