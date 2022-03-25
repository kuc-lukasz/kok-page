import styled, { css } from "styled-components";

export const ContactWindow = styled.div`
    margin: 15px;
    padding: 15px;
    max-width: 960px;
    border-radius: 10px;
    color: #084182;
    background-color: #ffffffd6;
    img {
        width: 64px;
        padding-top: 20px;
    }
    h1 {
        margin: 0 20px 20px 20px;
    }
    p {
        margin: 0 20px 20px 20px;
        text-align: justify;
    }
    @media screen and (max-width: 600px) {
        max-width: 350px;
    }
`;

export const ContactPosibilites = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const ContactSingleWindow = styled.div`
    h3 {
        margin-bottom: 0;
        text-transform: uppercase;
    }
    @media screen and (max-width: 600px) {
        margin-bottom: 0px;
    }
`;
export const ContactForm = styled.div`
    box-shadow: 0px 0px 5px 0px #a6a6a6;
    width: 250px;
    height: 50px;
    background-color: #d8b703;
    margin: 0 20px 20px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: #084182;
        font-size: large;
        font-weight: 600;
        text-decoration: none;
    }
    @media screen and (max-width: 600px) {
        margin-top: 0px;
    }
`;
