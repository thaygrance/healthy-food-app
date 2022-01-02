import styled from "styled-components";

export const FormTag = styled.form`
    background: #fafafc;
    height:30vw;
    width:100%;
    padding: 4vw 10vw;
    display: flex;

    form {
        background: white;
        border-radius: 3px;
        box-shadow: .3vw .6vw .6vw rgba(0, 0, 0, 0.1);
        padding-left:1.5vw;
    }

    label {
        color: #1d164d;
        font-family: 'Roboto', sans-serif;
        font-size: 1.8vw;
        font-weight: 500;

        input {
            border: 1px solid #1d164d; 
            border-radius:3px;
            color: #000000;    
            font-family: 'Roboto', sans-serif;
            font-size:1.3vw;
            height: 3.5vw;
            margin: 1.5vw 1.5vw 0 1vw;   
            padding: 0 1.5vw;
        }

        input#name{
            width: 25vw;
        }
        input#birthDate{
            width: 15vw;
        }
        input#cpf{
            width: 12vw;
        }
        input#cep{
            width: 10vw;
        }
        input#address{
            width: 20vw;
        }
        input#addressNumber{
            width: 8vw;
        }
        input#neightborhood{
            width: 15vw;
        }
        input#city {
            width: 15vw;
        }
        input#state{
            width: 8vw;
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
        font-size: 1.7vw;
        height: 3.5vw;
        margin: 2vw 0 2vw 32vw;
        text-align: center;
        width:15vw;
    }        
`;