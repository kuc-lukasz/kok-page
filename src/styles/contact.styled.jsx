import styled, { css } from "styled-components";

export const ContactWindow = styled.div`
    box-sizing: border-box;
    padding: 15px;
    color: #084182;
    width: 100%;

    background-color: #ffffff97;
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
        max-width: 960px;
        display: inline-block;
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
    background-color: #084182;
    margin: 0 20px 20px 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: #ffffff;
        font-size: large;
        font-weight: 500;
        text-decoration: none;
    }
    @media screen and (max-width: 600px) {
        margin-top: 0px;
    }
`;
