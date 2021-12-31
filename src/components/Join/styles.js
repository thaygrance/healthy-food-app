import DivJoinImg from "../../assets/images/bloco_final_image.svg"
import styled from "styled-components";

export const JoinTag = styled.div` 
    background: white;
    background-image:url(${DivJoinImg});
    background-position: right top;
    background-repeat: no-repeat;
    background-size:contain;
    height:48vw;
    width:100%;
`; 

export const EmailBar = styled.div` 
    width: 60vw;
    padding: 15vw 10vw;

    h2 {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 2.7vw;
        font-weight: 700;
        letter-spacing:.1vw;
        line-height: 1.5;
        
    }

    div {
        margin-top:1.1vw;
    }
    
    input {
        border: 1px solid #1d164d;
        border-radius:3px;
        color: #000000;
        font-family: 'Roboto', sans-serif;
        font-size:1.3vw;
        height: 3.5vw;
        padding: 0 1.5vw ;
        width: 24vw;
    }
    
    input::placeholder{
        color: #b1aebf;
    }

    button {
        background: #BADC58;
        border: 0;
        border-radius:3px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 1.3vw;
        font-weight: 500;
        height:3.5vw;
        margin:1.3vw;
        text-align: center;
        width: 6.5vw;
    }
`; 
