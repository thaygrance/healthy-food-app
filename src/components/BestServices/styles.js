import styled from "styled-components";
import BestServicesImg from '../../assets/images/bloco_services.svg';

export const BestServicesTag = styled.div` 
    background: white;
    background-image: url(${BestServicesImg});
    background-position: left top;
    background-repeat: no-repeat;
    background-size:contain;
    height:52vw;
    width:100%;

    div {
        margin-left: 50vw;
        padding-top: 10vw;
        width: 33vw;
    }

    h2 {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 2.6vw;
        font-weight: 700;
        letter-spacing:.2vw;
        margin-bottom: 2vw;
        text-align: left;   
    }

    p {
        color: #acaabb;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 400;
        line-height: 1.5;
        margin-top: .6vw;
        padding-bottom: 1.2vw;
        text-align: left;
    }

    button {
        background: #BADC58;
        border: 0;
        border-radius:3px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 500;
        margin-top:1.3vw;
        padding: 1.1vw 2vw;
        text-align: center;  
    }
`;