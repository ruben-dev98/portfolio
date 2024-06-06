import { Link } from "@mui/material";
import styled from "styled-components";
import { social } from "../../assets/assets";
import React from 'react';

const FooterStyled = styled.footer`
    width: 100%;
    margin: 0 auto;
    position: relative;
	padding-top: 80px;
	padding-bottom: 50px;
	background-color: #230529;
    color: #fff;

    section {
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }

    header {
        width: 100%;
        position: relative;
        border-radius: 20px 0px 20px 0px;
        margin-bottom: 60px;
        display: flex;
    }

    h2 {
        margin: 20px 0 0 0;
        font-size: 3.1rem;
        line-height: 3.75rem;
    }

    footer {
        width: 100%;
        position: relative;
        /*background-color: #17262B;
        padding: 70px 40px;
        box-shadow: 20px 20px 0px 0px rgba(254, 229, 181, 0.08);
        border-radius: 20px 0px 20px 0px;
        margin-bottom: 60px;*/
        justify-content: center;
        text-align: center;
    }

    ul {
        list-style: none;
        display: flex;
    }

    a {
        font-size: 3rem;
        color: #fff;
    }
`;


const FooterComponent = () => {
    return (
        <FooterStyled>
            <section>
                <div>
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
                        </div>
                    </footer>
                </div>
            </section>
        </FooterStyled>
    );
}


export default FooterComponent;