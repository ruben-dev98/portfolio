import { Link } from "@mui/material";
import styled from "styled-components";
import { social } from "../../assets/assets";
import React from 'react';

const FooterStyled = styled.footer`
    padding: 40px 0;
    background-color: #230529;
    color: #fff;

    header {
        text-align: center;
        display: block;
        width: 100%;

        h2 {
            line-height: 1.75rem;
            letter-spacing: 0.15rem;
            font-size: 1.55rem;
            font-weight: 700;
            margin: 0 0 32px 0;
        }

        ul {
            list-style: none;
            width: 100%;

            li {
                display: inline-block;
                
                a {
                    font-size: 40px;
                    padding: 8px;
                    color: #fff;
                }
            }
        }
    }
    
    @media (min-width: 1000px) {
        padding: 80px 0 50px 0;

        h2 {
            font-size: 3.1rem;
            line-height: 3.75rem;
        }
        
    }
    
`;



const FooterComponent = () => {
    return (
        <FooterStyled>
            <header>
                <div>
                    <h2>
                        Ponte En Contacto Conmigo
                    </h2>
                </div>
                <ul>
                    {
                        social && social.map((soc, index) => {
                            return (
                                <li key={index}>
                                    <Link href={soc.link}>
                                        {React.createElement(soc.icon)}
                                    </Link>
                                </li>
                            )
                        })

                    }
                </ul>
            </header>
        </FooterStyled>
    );
}

export default FooterComponent;