
import ExperienceComponent from '../ExperienceComponent/ExperienceComponent';
import ProjectsComponent from '../ProjectsComponent/ProjectsComponent';
import StudiesComponent from '../StudiesComponent/StudiesComponent';
import AboutComponent from './../AboutComponent/AboutComponent';
import StackComponent from './../StackComponent/StackComponent';
import { styled } from 'styled-components';


const MainStyled = styled.main`
    width: 80%;
    margin: 0 auto;
    height: auto;
    padding: 50px 0;

    h1 {
        font-family: "Tiny5", sans-serif;
        color: ${props => props.theme && props.theme.text};
    }

    section {
        padding: 0 10px;
        margin: 40px 0;
        width: 100%;
        font-size: 1rem;
        color: ${props => props.theme && props.theme.text_secondary};

        .MuiTypography-root {
            font-family: "Roboto Mono", monospace;
        }
    }

    .section__projects, .section__experience, .section__stack, .section__studies {
        .MuiPaper-root {
            max-width: 450px;
            margin: 30px 0;
        }
    }

    @media (min-width: 1000px) {

        .section__projects {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
            grid-auto-rows: minmax(100px, auto);
        }

        .section__stack {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            grid-auto-rows: minmax(50px, auto);
        }

        .section__experience {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            grid-auto-rows: minmax(50px, auto);
        }

        .section__studies {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            grid-auto-rows: minmax(50px, auto);
        }
    }
`;

const MainComponent = () => {
    return (
        <MainStyled>
            <AboutComponent>
                <StackComponent />
            </AboutComponent>
            <ProjectsComponent />
            <StudiesComponent />
            <ExperienceComponent />
        </MainStyled>
    );
}


export default MainComponent;