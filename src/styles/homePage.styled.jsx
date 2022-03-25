import styled, { css } from "styled-components";

export const MainHomePageContainer = styled.div`
    width: 100%;
`;

const sharedWindowStyle = css`
    color: #084182;
    background-color: #ffffffd6;
`;

export const IntroduceContainer = styled.div`
    margin: 30px;
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    img {
        padding: 2px;
        margin: 0px;
        border-radius: 50%;
        width: 300px;
        border: 2px solid #084182;
        background-color: #084182;
        vertical-align: -webkit-baseline-middle;
        box-shadow: 0px 0px 5px 0px black;
    }
    @media screen and (max-width: 600px) {
        img {
            width: 150px;
        }

        justify-content: center;
        padding: 10px;
    }
`;

export const DescribeMeContainer = styled.div`
    ${sharedWindowStyle}
    min-width: 300px;
    max-width: 500px;
    border-radius: 10px;
    margin: 20px;
    & > h2 {
        text-transform: uppercase;
    }
    p {
        padding: 10px 15px;
    }
`;
export const HowWorkContainer = styled.div`
    background-color: #dfdfdfba;
    & > h1 {
        padding-top: 30px;
        text-transform: uppercase;
        color: #084182;
    }
`;
export const StepsWindows = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 20px;
    margin: 10px 10px 50px 10px;
`;

export const StepsWindow = styled.div`
    ${sharedWindowStyle}
    margin: 10px;
    padding: 10px;
    width: 320px;
    height: 400px;
    border-radius: 10px;
    img {
        margin-top: 20px;
        width: 64px;
    }
    h3 {
        padding: 0 10px 10px 10px;
        margin-top: 0;
        text-transform: uppercase;
    }
    p {
        padding: 10px;
        text-align: justify;
    }
    @media screen and (max-width: 600px) {
        height: auto;
    }
`;
