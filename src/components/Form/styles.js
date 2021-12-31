import DivSearchImg from "../../assets/images/DivSearchImg.png";
import styled from "styled-components";

export const MainTag = styled.main`
    background: white;
    background-image:url(${DivSearchImg});
    background-position: right top;
    background-repeat: no-repeat;
    background-size:contain;
    border-bottom: 25vw solid white;
    height:80vw;
    margin-top:-8vw; 
    width:100%;
`; 

export const FormTag = styled.form`

    padding: 10vw;
    text-align: right;
    width: 50vw;

    h4{
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8vw;
        font-weight: 700;
        letter-spacing:.1vw;
        text-align: left;
    }

    label {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.4vw;
        font-weight: 500;

        input {
            border: 1px solid #1d164d; 
            border-radius:3px;
            color: #000000;    
            font-family: 'Roboto', sans-serif;
            font-size:1.3vw;
            height: 2vw;
            margin: .2vw;   
            width: 15vw;
        }

        input::placeholder{
            color: #b1aebf;
        }

        .Auth {
            background-color: #f1f1f1;
        }
        
    }

    button {
        background: #BADC58;
        border: 1px solid  #BADC58;
        border-radius:3px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        font-weight: 500;
        height: 3vw;
        margin: .2vw;
        text-align: center;
        width:15vw;
    }        
`;