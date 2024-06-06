
import React from 'react';
import { stack } from './../../assets/assets';
import { Box, Card, CardContent, Typography } from '@mui/material';
import styled from 'styled-components';

const CardStyled = styled(Card)`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StackComponent = () => {
    return (
        <>
            <h1>Mis Conocimientos</h1>
            <section className='section__stack'>
                {stack && stack.map((language, index) => {
                    return (
                        <CardStyled key={index}>
                            <Box>
                                <Typography component="div" variant="h5">
                                    {React.createElement(language.icon)}
                                </Typography>
                            </Box>
                            <Box>
                                <CardContent>
                                    <Typography component="div" variant="h5">
                                        {language.name}
                                    </Typography>
                                </CardContent>
                            </Box>
                        </CardStyled>
                    );
                })}
            </section>
        </>

    );
}

export default StackComponent;