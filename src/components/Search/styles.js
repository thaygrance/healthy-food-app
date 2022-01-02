import DivSearchImg from "../../assets/images/DivSearchImg.png";
import styled from "styled-components";

export const SearchTag = styled.div` 
    background: white;
    background-image:url(${DivSearchImg});
    background-position: right top;
    background-repeat: no-repeat;
    background-size:contain;
    border-bottom: 2vw solid white;
    height:55vw;
    margin-top:-8vw; 
    width:100%;
    `; 

    export const SearchBar = styled.div` 
    margin-left:10vw;
    padding-top: 20vw;
    width: 50vw;

    h2 {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 3.5vw;
        font-weight: 700;
        letter-spacing:.1vw;
        line-height: 1.5;
    }
    
    div {
        display:flex;
        justify-content: flex-start;
        margin-top:1.5vw;
        width:40vw;
    }
    
    input {
        border: 1px solid #1d164d; 
        border-radius:3px;
        color: #000000;
        font-family: 'Roboto', sans-serif;
        font-size:1.3vw;
        height: 3.5vw;
        padding: 0 1.5vw;
        width: 22vw;
    }
    
    input::placeholder{
        color: #b1aebf;
    }
    
    button{
        background: #BADC58;
        border: 0;
        border-radius:3px;
        height:3.5vw;
        margin-left: 1vw;
        width: 3.5vw;

        img {
            width:1.3vw;
        }
    }
`; 
