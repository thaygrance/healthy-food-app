import styled from "styled-components";

export const HeaderTag = styled.header`
    background: white;
    display: flex;
    height:6vw;
    justify-content: space-between;
    padding: 3vw 10vw;
    width:100%;

    h1 {
        color: #BADC58;
        font-family: 'Roboto', sans-serif;
        font-size: 2.5vw;
        font-weight: 700;
        letter-spacing:.1vw;  
    }

    nav > ul {
        align-items: center;
        display: flex;
        justify-content: space-between;
        list-style: none;
        

        >li {
            color: white;
            cursor: pointer;
            font-family: 'Roboto', sans-serif;
            font-size:1.3vw;
            font-weight:500;
            letter-spacing:.1vw; 
            margin-left:2vw;
            
            a > button {
                background-color:white;
                border: 0;
                border-radius:3px;
                color: #BADC58;
                font-family: 'Roboto', sans-serif;
                font-size:1.3vw;
                font-weight:500;
                height:3.5vw;
                letter-spacing:.1vw; 
                width: 9.5vw;
            }
        }
    }
`;