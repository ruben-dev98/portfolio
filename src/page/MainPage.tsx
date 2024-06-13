import styled from 'styled-components';
import FooterComponent from '../components/FooterComponent/FooterComponent';
import MainComponent from '../components/MainComponent/MainComponent';
import HeaderComponent from './../components/HeaderComponent/HeaderComponent';

const DivStyled = styled.div`
    background-color: ${props => props.theme && props.theme.main};
`

const MainPage = () => {

    return (
        <DivStyled>
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </DivStyled>
    );
}

export default MainPage;