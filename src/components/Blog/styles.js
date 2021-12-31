import styled from "styled-components";

export const BlogTag = styled.div`
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
        padding: 1.2vw;
        text-align: center;
    }

    p {
        color: #acaabb;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 400;
        line-height: 1.5;
        padding-bottom: 1.1vw;
        text-align: center; 
    }

    div.Container {
        padding-left:8.5vw;
    }

    div.Card {
        background: white;
        border-radius: 5px;
        box-shadow: .3vw .6vw .6vw rgba(0, 0, 0, 0.1);
        height:32vw;
        margin: 1vw;
        width: 25vw;
    }

    img {
        height: 100%;
        width: 100%;    
    }

    h4{
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8vw;
        font-weight: 700;
        letter-spacing:.1vw;
        padding: 1.5vw 2vw;
        text-align: left; 
    }

    div.avatar {
        align-items: center;
        display:flex;
    }

    div.avatar img {
        margin: 0px 1vw 2.3vw 2vw;
        width: 3.8vw;
    }

    div.avatar h5 {
        color: #acaabb;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 400;
        margin-bottom: 2vw;
        text-align: center; 
    }

    button {
        background:  #BADC58; 
    }

    button:hover {
        background: rgba(186,220,88, 0.7)
    }
`;