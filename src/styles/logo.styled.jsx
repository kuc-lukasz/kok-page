import styled from "styled-components";

export const MainPageWindow = styled.div`
    width: 100%;
    margin: -1px auto;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: white;
    box-sizing: border-box;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: flex-start;
        height: 130px;
    }
`;

export const Links = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 20px;
    @media screen and (max-width: 600px) {
        justify-content: center;
        margin: 5px;
    }
`;
export const Link = styled.div`
    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img {
        width: 25px;
        height: 25px;
        margin: 10px;
    }
    @media screen and (max-width: 600px) {
        margin: 0;
        flex-wrap: wrap;
        img {
            width: 25px;
            height: 25px;
            margin: 5px;
        }
    }
`;

export const MainLogo = styled.div`
    img {
        width: 150px;
    }
    @media screen and (max-width: 600px) {
        position: absolute;
        top: 50px;
        left: 25%;
        right: 25%;
        img {
            margin-top: 0;
            width: 120px;
        }
    }
`;

export const PhoneNumber = styled.div`
    box-shadow: 0px 0px 5px 0px #a6a6a6;
    width: 160px;
    height: 50px;
    background-color: #084182;
    margin: 20px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
        color: white;
        font-size: large;
        font-weight: 600;
        text-decoration: none;
    }
    @media screen and (max-width: 600px) {
        width: 130px;
        height: 30px;
        position: absolute;
        top: 0px;
        right: 5px;
        margin: 5px;
        a {
            font-size: medium;
            font-weight: 600;
            text-decoration: none;
        }
    }
`;
