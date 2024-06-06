import { Link } from "@mui/material";
import styled from "styled-components";
import { social } from "../../assets/assets";
import React from 'react';

const FooterStyled = styled.footer`
    position: relative;
	padding: 80px 0 50px 0;
	background-color: #230529;
    color: #fff;

    section {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    header {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    h2 {
        font-size: 3.1rem;
        line-height: 3.75rem;
    }

    footer {
        width: 100%;
        position: relative;
        justify-content: center;
        text-align: center;
    }

    ul {
        margin: 0 0;
        list-style: none;
        display: flex;
        gap: 10px;
    }

    a {
        font-size: 2rem;
        color: #fff;
    }
`;


const FooterComponent = () => {
    return (
        <FooterStyled>
            <section>
                <header>
                    <div>
                        <h2>
                            Ponte en contacto
                        </h2>
                    </div>
                    <p>
                        Algo de texto para rellenar
                    </p>
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
                <footer>
                    <div>
                        <span>
                        </span>
                    </div>
                    <div>
                        <a href="mailto:contact@example.com">
                            <h6 >
                                <span>contact@example.com</span>
                            </h6>
                        </a>
                    </div>
                </footer>
            </section>
        </FooterStyled>
    );
}


export default FooterComponent;