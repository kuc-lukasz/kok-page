import styled, { css } from "styled-components";

export const FinanceOffer = styled.div`
    box-sizing: border-box;
    width: 100%;
    background-color: #ffffff97;
    padding: 15px;
    border-radius: 10px;
    color: #084182;

    img {
        width: 64px;
        padding-top: 20px;
    }
    h1 {
        margin: 0 20px 20px 20px;
    }
    & > p {
        display: inline-block;
        margin: 0 auto;
        text-align: justify;
        max-width: 960px;
    }
    @media screen and (max-width: 600px) {
        max-width: 350px;
    }
`;

const sharedWindowStyle = css`
    color: #084182;
    background-color: #ffffffa4;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.808);
    width: 350px;
    height: 350px;
    margin: 10px 30px 10px 30px;
    border-radius: 10px;
`;

export const SingleCompanyOffer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 20px;
`;

export const SingleOffer = styled.div`
    ${sharedWindowStyle}
    h3 {
        margin-top: 0;
        text-transform: uppercase;
    }
    ul {
        text-align: left;
    }
`;

export const CompanyMeOffer = styled.div`
    ${sharedWindowStyle}
    h3 {
        margin-top: 0;
        text-transform: uppercase;
    }
    ul {
        text-align: left;
    }
`;
