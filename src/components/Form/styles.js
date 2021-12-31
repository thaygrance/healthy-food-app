import DivSearchImg from "../../assets/images/DivSearchImg.png";
import styled from "styled-components";

export const MainTag = styled.main`
    background: white;
    background-image:url(${DivSearchImg});
    background-position: right top;
    background-repeat: no-repeat;
    background-size:contain;
    border-bottom: 20px solid white;
    height:55vw;
    margin-top:-6vw; 
    width:100%;
`; 

export const FormTag = styled.form`
    display: flex;
    flex-direction: column;
    padding: 10vw;
    text-align: right;
    width: 50vw;

    h4{
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8vw;
        font-weight: 700;
        letter-spacing:.1vw;
        padding-bottom: 1.3vw; 
        text-align: left;
    }

    label {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.4vw;
        font-weight: 500;
        line-height: 1.5;

        input {
            border: 1px solid #1d164d; 
            border-radius:3px;
            color: #000000;    
            font-family: 'Roboto', sans-serif;
            font-size:1.3vw;
            height: 3vw;
            margin: .5vw;
            padding: .6vw;    
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
        border-radius:5px;
        color: white;
        font-family: 'Roboto', sans-serif;
        font-size: 1vw;
        font-weight: 500;
        height: 3vw;
        letter-spacing:.1vw;
        margin: .5vw;
        padding: .6vw;
        text-align: center;
        width:15vw;
    }        
`;