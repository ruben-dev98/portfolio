
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

        form {
            width: 100%;

            input:last-child {
                width: 90%;
            }

            div{
                display: inline-block;
                width: 50%;
                margin: 10px 0;

                &:nth-child(3), &:last-child {
                    width: 100%;
                }
            }

            input {
                appearance: none;
                display: block;
                width: auto;
                padding: 10px;
                background-color: #f8f8f8;
                border-radius: 10px;
            
                &:focus {
                    border-color: aliceblue;
                }
            }

            textarea {
                display: block;
                width: 100%;
                padding: 10px;
                border-radius: 10px;
                background-color: #f8f8f8;
            }

            label {
                display: block;
                font-size: 1.3rem;
                color: #222;
                margin-bottom: 7px;
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