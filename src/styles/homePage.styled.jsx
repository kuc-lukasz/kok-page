import styled, { css } from "styled-components";

export const MainHomePageContainer = styled.div`
    width: 100%;
    background-color: #ffffff97;
`;

const sharedWindowStyle = css`
    color: #084182;
    background-color: #ffffffd6;
`;

export const WhoIam = styled.div`
    margin: 0;
    width: 100%;
    color: #084182;
    text-transform: uppercase;
    h1 {
        margin: 0;
        letter-spacing: 2px;
    }
    h2 {
        margin: 0;
        letter-spacing: 1px;
    }
    @media screen and (max-width: 600px) {
        margin: 15px;
        h1 {
            font-size: x-large;
        }

        h2 {
            font-size: large;
        }
    }
`;
export const IntroduceContainer = styled.div`
    width: 100%;
    box-sizing: border-box;
    margin: 0px;
    padding: 30px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    img {
        padding: 2px;
        margin: 0px;
        border-radius: 50%;
        width: 250px;
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
    /* ${sharedWindowStyle} */
    color: #084182;
    min-width: 300px;
    max-width: 500px;
    border-radius: 10px;
    /* margin: 20px; */
    & > h2 {
        text-transform: uppercase;
    }
    & > p {
        text-align: left;
        padding: 10px 15px;
        font-weight: 550;
    }
`;
export const HowWorkContainer = styled.div`
    background-color: hsl(0deg 0% 89% / 67%);
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
    margin: 10px 10px 0px 10px;
`;

export const StepsWindow = styled.div`
    ${sharedWindowStyle}
    margin: 10px;
    padding: 10px;
    width: 320px;
    height: 460px;
    border-radius: 10px;
    img {
        margin-top: 5px;
        width: 64px;
    }
    h3 {
        padding: 0 10px 0px 10px;
        margin-top: 0;
        text-transform: uppercase;
    }
    & > p {
        margin: 0;
        padding: 0 10px;
        text-align: justify;
    }
    @media screen and (max-width: 600px) {
        height: auto;
    }
`;
