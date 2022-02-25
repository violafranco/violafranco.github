import React from 'react';
import styled from 'styled-components';

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
            </BoxOne>

            <BoxTwo>

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
        flex-direction: column;
        padding-top: 2em;
    }

    @media (max-width: 480px) {
        padding-top: 0;
    }
`

const BoxOne = styled.div`

`

const BoxTwo = styled.div`
    
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
    }
`
 
const Paragraph = styled.p`
    font-size: 1.8em;
    width: 60%;
    padding-left: 1.1em;

    @media (max-width: 768px) {
        font-size: 1.4em;
        width: 70%;
        padding-left: 1.35em;
    }

    @media (max-width: 480px) {
        width: 90vw;
        font-size: 1.2em;
        padding-top: 0;
        padding-left: 1.5em;
    }
`

export default Main;