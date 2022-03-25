import styled, { css } from "styled-components";

export const FinanceOffer = styled.div`
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

const sharedWindowStyle = css`
    color: #084182;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.808);
    width: 300px;
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
