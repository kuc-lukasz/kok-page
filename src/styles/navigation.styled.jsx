import styled from "styled-components";

export const NavButtons = styled.div`
    width: 100%;
    height: 55px;
    margin: 0 auto 10px auto;
    padding: 10px;
    display: flex;
    justify-content: end;
    box-shadow: 0 6px 5px 0px #dbdbdb;
    background-color: white;
    z-index: 1;
    box-sizing: border-box;
    @media screen and (max-width: 600px) {
        justify-content: center;
        padding: 0px;
    }
`;
export const NavButton = styled.button`
    background-color: white;
    border: none;
    font-size: large;
    font-weight: 700;
    margin: 15px;
    color: #084182;

    :hover {
        color: #d8b703;
    }
    @media screen and (max-width: 600px) {
        max-width: min-content;
        font-size: medium;
        font-weight: 600;
        margin: 10px;
    }
`;
