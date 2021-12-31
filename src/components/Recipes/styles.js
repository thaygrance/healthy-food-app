import styled from "styled-components";

export const RecipesTag = styled.div`
    background-color: #fafafc;
    height:55vw;
    padding-top: 2vw;
    width:100%;

    h3 {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 2.7vw;
        font-weight: 700;
        letter-spacing:.1vw;
        text-align: center;
        padding: 1vw;
    }

    p {
        color: #acaabb;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 400;
        line-height: 1.5;
        padding-bottom: 1.3vw;
        text-align: center;  
    }

    `; 
    export const CardContainer = styled.div`
        align-content: center;
        align-items: center;
        display: flex;
        flex-wrap:wrap;
        justify-content: center;
    `;

    export const Card = styled.div`
    border-radius: 8px;
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.07);
    display:flex;
    height:16vw;
    margin: 0 1.3vw 3vw 1.3vw;
    width: 38vw;

    img {
        height: 16vw;
        width: 100%;    
    }

    div { 
        padding:3vw 2vw;
        width: 20vw;
    }

    h4{
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8vw;
        font-weight: 700;
        letter-spacing:.1vw;
        padding-bottom: 1.3vw;
        text-align: left;  
    }

    button {
        background: #BADC58;
        border: 0;
        border-radius:5px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 1.2vw;
        font-weight: 500;
        height: 3.3vw;
        letter-spacing:.1vw;
        text-align: center;
        width: 9vw; 
    }
`;