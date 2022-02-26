import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from "react-router-dom";
import personalImage from './../img/personalPhoto.jpeg'
import cup from './../img/cup.png'


const Main = () => {
    return ( 
        <Container>
            <BoxOne>
                <Title><strong>Front End</strong>Developer</Title>
                <Paragraph>
                    Estoy estudiando para ser un desarrollador Front End, hasta la 
                    actualidad manejo de forma vanilla HTML, CSS, JS y React, dentro 
                    de esta última librería me estoy perfeccionando actualmente en hooks 
                    y el uso de Redux. Además soy estudiante de la carrera Ingeniería en 
                    computación dentro de la UNC y estoy realizando el curso de Certified
                    Tech Developer dentro de Digital House.
                </Paragraph>
                <Button to="main">MIS PROYECTOS</Button> 
            </BoxOne>

            <BoxTwo>
                <Image src={personalImage} />
            </BoxTwo>
        </Container>
     );
}

const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;
    justify-content: space-between;
    padding-top: 5em;

    @media (max-width: 768px) {
        padding-top: 2em;
    }

    @media (max-width: 480px) {
        flex-direction: column-reverse;
        padding-top: 0;
    }
`

const BoxOne = styled.div`
    max-width: 800px;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {
        text-align: center;
        margin-top: 0;
    }
`

const BoxTwo = styled.div`
    @media (max-width: 480px) {
        text-align: center;
        margin-left: 2.2em;
    }
`

const Title = styled.h1`
    font-size: 4em;   

    & > strong{
        color: ${({theme}) => theme.TextSecondary};
        text-shadow: 0 0 40px ${({theme}) => theme.TextSecondary}
    }

    @media (max-width: 768px) {
        font-size: 3.5em;
    }

    @media (max-width: 480px) {
        width: 100vw;
        font-size: 2.5em;
        margin-left: -0.9em;
    }
`
 
const Paragraph = styled.p`
    font-size: 1.8em;
    width: 80%;
    padding-left: 1.1em;
    margin-bottom: 1.2em;

    @media (max-width: 768px) {
        font-size: 1.4em;
        width: 85%;
        padding-left: 1.35em;
    }

    @media (max-width: 480px) {
        width: 90vw;
        font-size: 1.2em;
        padding-top: 0;
        padding-left: 0.7em;
    }
`

const Button = styled(Link)`
    text-decoration: none;
    font-size: 1.6em;
    margin-left: 1.4em;
    padding: .4em .8em;
    background-color: ${({theme}) => theme.TextSecondary};
    box-shadow: 0 1px 15px ${({theme}) => theme.TextSecondary};
    color: #ffffff;
    transition: all ease-in .3s;

    &:hover{
        background-color: #0062ad;
    }

    @media (max-width: 480px) {
        font-size: 1.4em;
        padding: .3em .7em;
        margin-left: 2.2em;
    }

`

const rotate = keyframes`
    0% { transform: translateY(-5px); }
    100% { transform: translateY(-18px); }
`;

const Image = styled.img`
    width: 60%;
    border-radius: 50%;
    margin-top: 3em;
    border: none;
    padding: 0;
    animation: 2.5s ${rotate} alternate infinite;

    @media (max-width: 768px) {
        width: 95%;
        margin-top: 8em;
    }

    @media (max-width: 480px) {
        width: 40%;
        margin-top: .5em;
    }
`

const ImageSecond = styled.img`
    width: 7%;
    border: none;
    padding: 0;
    margin: 0;
    animation: 2.5s ${rotate} alternate infinite;

    @media (max-width: 768px) {
        width: 95%;
        margin-top: 8em;
    }

    @media (max-width: 480px) {
        width: 40%;
        margin-top: .5em;}
`


export default Main;