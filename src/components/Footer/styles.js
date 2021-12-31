import styled from "styled-components";

export const FooterTag = styled.footer`
    background: white;
    display: flex;
    font-family: 'Roboto', sans-serif;
    justify-content: space-between;
    padding: 3vw 10vw;
    width: 100%;

    div.Copyright p {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 400;
        text-align: center; 
    }

    div.Terms {
        display:flex; 
        text-align: center; 

        p {
            color: #acaabb;
            font-family: 'Roboto', sans-serif;
            font-size: 1.3vw;
            font-weight: 400;
            margin-left: 40px;
        }
    }
`;