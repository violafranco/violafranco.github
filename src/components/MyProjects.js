import React from 'react';
import styled from 'styled-components';
import ListaDeGastos from './../img/Projects/ListaGastos.PNG';
import FyloPage from './../img/Projects/FyloPage.PNG';
import ToDoList from './../img/Projects/ToDoList-React.PNG';
import Remix from './../img/Projects/Remix.PNG';
import Weather from './../img/Projects/Weather.PNG';
import RickAndMorty from './../img/Projects/rickAndMorty.PNG';

const MyProjects = () => {
    return (
        <Container id='projects'>
            <BoxOne>
                <Title>Mis<strong>Proyectos</strong></Title>
                <Paragraph>Estos son los proyectos de mi portafolio. 
                Puedes abrirlos para verlos y probarlos en vivo o también te doy
                la opción de ver el repositorio dentro de mi github.</Paragraph>
            </BoxOne>

            <BoxTwo>
                <ContainerCard2>
                    <Card>
                        <Image src={ListaDeGastos} />
                        <TitleProject>Lista de Gastos - React</TitleProject>
                        <DescriptionProject>Esta app llamada "Lista de Gastos" tiene la principal 
                        funcionalidad de llevar un registro mensual de que gastos realizado. Para realizar la aplicación 
                        utilice React, cree los estilos con Styled Component y utilice como 
                        base de datos Firebase.</DescriptionProject>
                        <Button><a href='https://github.com/violafranco/ListaDeGastos' target='_blank'>Ver codigo en GitHub</a></Button>
                        <Button><a href='https://gniy8.csb.app/iniciar-sesion' target='_blank'>Visualizar Página</a></Button>
                    </Card>
                    <Card>
                        <Image src={Weather} />
                        <TitleProject>Aplicación del clima - React</TitleProject>
                        <DescriptionProject>Esta es una simple aplicación del clima que esta hecha con ReactJS y estilizada
                        con Styled components. La misma consume y extrae los datos de la REST API Open Weather Map</DescriptionProject>
                        <Button><a href='https://github.com/violafranco/weatherApp' target='_blank'>Ver codigo en GitHub</a></Button>
                        <Button><a href='https://violafranco.github.io/weatherApp/' target='_blank'>Visualizar Página</a></Button>
                    </Card>
                    <Card>
                        <Image src={RickAndMorty} />
                        <TitleProject>Rick & Morty - React</TitleProject>
                        <DescriptionProject>Esta es una app que consume la REST API de rick and morty, de la misma extraigo algunos
                        datos y creo cards de cada personaje dando una breve descripción, para su estilización utilice Styled Component</DescriptionProject>
                        <Button><a href='https://github.com/violafranco/rick-MortyApp' target='_blank'>Ver codigo en GitHub</a></Button>
                        <Button><a href='https://violafranco.github.io/rick-MortyApp/' target='_blank'>Visualizar Página</a></Button>
                    </Card>
                </ContainerCard2>

                <ContainerCard>
                    <Card>
                        <Image src={ToDoList} />
                        <TitleProject>To Do List - React</TitleProject>
                        <DescriptionProject>En esta app realizada, aplique el uso de la librería React para 
                        poder crear una simple lista de tareas, en la misma aplique el uso de hooks y componentes, 
                        y para el almacenamiento de datos solo utilicé LocalStorage.</DescriptionProject>
                        <Button><a href='https://github.com/violafranco/ListToDo-React' target='_blank'>Ver codigo en GitHub</a></Button>
                        <Button><a href='https://violafranco.github.io/ListToDo-React/' target='_blank'>Visualizar Página</a></Button>
                    </Card>
                    <Card>
                        <Image src={Remix} />
                        <TitleProject>Remix App - React</TitleProject>
                        <DescriptionProject>Esta es una pagina estática hecha con componentes de ReactJS, ademas de que la página es respinsive
                        tiene hecho el modo oscuro. La misma esta hecha en base ak seguimiento de un Figma.</DescriptionProject>
                        <Button><a href='https://github.com/violafranco/remixAppReactJS' target='_blank'>Ver codigo en GitHub</a></Button>
                        <Button><a href='https://violafranco.github.io/remixAppReactJS/' target='_blank'>Visualizar Página</a></Button>
                    </Card>
                    <Card>
                        <Image src={FyloPage} />
                        <TitleProject>Fylo Page</TitleProject>
                        <DescriptionProject>En este pequeño proyecto realizado utilice de forma vanila HTML y CSS, 
                        agregando herramientas extras como Fontawesome y Google Fonts.</DescriptionProject>
                        <Button><a href='https://github.com/violafranco/FyloPage' target='_blank'>Ver codigo en GitHub</a></Button>
                        <Button><a href='https://violafranco.github.io/FyloPage/' target='_blank'>Visualizar Página</a></Button>
                    </Card>
                </ContainerCard>
            </BoxTwo>
        </Container>
    );
}

const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.5em;

    @media (max-width: 680px) {
        margin-left: -3em;
    }
`

const BoxOne = styled.div`
    text-align: center;
    
    @media (max-width: 680px) {
        margin-left: 6em;
    }
`
const Title = styled.h2`
    font-size: 3.2em;  

    & > strong{
        color: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 680px) {
        font-size: 2.5em; 
    }
`

const Paragraph = styled.p`
    margin: auto;
    width: 60%;
    font-size: 1.7em;
    margin-top: 0;

    @media (max-width: 680px) {
        width: 100%;
        font-size: 1.2em;
    }
`

const BoxTwo = styled.div`
    text-align: center;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 95vw;
    }

    @media (max-width: 680px) {
        display: flex;
        flex-direction: column;
        margin-left: 4em;
        width: 95vw;
    }
`

const Card = styled.div`
    background-color: rgb(0, 124, 219, 0.1);
    border-radius: 15px;
    margin: 1em;
    transition: all .3s ease-in ;

    &:hover{
        transform: scale(1.02);
    }
`

const Image = styled.img`
    max-width: 80%;
    border-radius: 15px;
    margin-top: 1em;
`

const TitleProject = styled.h2`
    font-size: 2em;
`

const DescriptionProject = styled.p`
    max-width: 90%;
    margin: auto;
`

const Button = styled.button`
    margin-top: 1em;
    margin-bottom: 1.2em;
    margin-left: .3em;
    margin-right: .3em;
    cursor: pointer;
    padding: 0.8em;
    border: none;
    border-radius: 15px;
    background-color: ${({theme}) => theme.TextSecondary};
    background-image: linear-gradient(#004d87, #004d87);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position-x: right;
    animation: all 1s;
    transition: background-size 500ms;
    font-family: 'Poppins', sans-serif;

    &:hover{
        background-size: 100% 100%;
        background-position-x: left;
    }

    & > a{
        text-decoration: none;
        color: white;
    }
`

const ContainerCard = styled.div`
    display: flex;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        width: 91vw;
    }
`
const ContainerCard2 = styled.div`
    display: flex;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
    }

`
 
export default MyProjects;