
import ContactComponent from '../ContactComponent/ContactComponent';
import ProjectsComponent from '../ProjectsComponent/ProjectsComponent';
import AboutComponent from './../AboutComponent/AboutComponent';
import { styled } from 'styled-components';

const MainStyled = styled.main`
    width: 80%;
    margin: 0 auto;
    height: 100vh;

    section {
        width: 100%;
        font-size: 1rem;
        color: #222;
        background-color: #777;
    
        form {
            width: 100%;

            input {
                width: 100%;
                padding: 7px;
                background-color: #f8f8f8;
            }

            textarea {
                width: 100%;
                padding: 7px;
                background-color: #f8f8f8;
            }
        }
    }
`;

const MainComponent = () => {
    return (
        <MainStyled>
            <AboutComponent/>
            <ProjectsComponent/>
            <ContactComponent/>
        </MainStyled>
    );
}


export default MainComponent;