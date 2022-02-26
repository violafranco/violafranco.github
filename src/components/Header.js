import React from 'react';
import styled from 'styled-components';
import Switch from '../switch/Switch';
import { Link } from "react-router-dom";
import {ReactComponent as GitHubLogo} from './../img/githubLogo.svg';
import {ReactComponent as LinkedinLogo} from './../img/linkedinLogo.svg';


const Header = ({theme, setTheme}) => {
    return ( 
        <Container>

            <BoxOne>
                <Logo to="/">[Franco]</Logo>
                <Text to="main">Proyectos</Text>
                <Text to="main">Mis Skills</Text>
                <Text to="main">Contacto</Text>
                <Switch theme={theme} setTheme={setTheme} />
            </BoxOne>

            <BoxTwo>
                <a href='https://github.com/violafranco' target='_blank'><GitL /></a>
                <a href='https://www.linkedin.com/in/franco-viola-/' target='_blank'><LinkedinL /></a>
            </BoxTwo>

        </Container>
    );
}


const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    margin: 0;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &.background{filter: blur(10px);}

    @media (max-width: 768px) {
        flex-direction: row;
    }
`

const BoxOne = styled.div`
    padding: 0;
    display: flex;
    text-align: center;
` 

const BoxTwo = styled.div`
    padding: 0;
    margin: 0;
    text-align: end;
`

const Logo = styled(Link)`
    font-size: 3.2em;
    font-family: 'Yanone Kaffeesatz', sans-serif;;
    text-decoration: none;
    color: ${({theme}) => theme.TextPrimary};
    transition: all ease-in 0.3s;

    &:hover{
        text-shadow: 0 0 25px ${({theme}) => theme.TextSecondary};
    }
`

const Text = styled(Link)`
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
    color: ${({theme}) => theme.TextPrimary};
    transition: all ease-in 0.3s;

    &:hover{
        color: ${({theme}) => theme.TextSecondary};
        text-shadow: 0 0 25px ${({theme}) => theme.TextSecondary};
        transform: translateY(-3px);
    }

    &:active{
        transform: translateY(5px);
    }

    @media (max-width: 768px) {
        font-size: 1.1em;
    }
`

const GitL = styled(GitHubLogo)`
    width: 30px;
    fill: ${({theme}) => theme.TextPrimary};
    padding: 0;
    transition: all ease-in 0.3s;

    &:hover{
        fill: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 480px) {
        width: 20px;
    }
`

const LinkedinL = styled(LinkedinLogo)`
    width: 30px;
    fill: ${({theme}) => theme.TextPrimary};
    padding: 0;
    transition: all ease-in 0.3s;

    &:hover{
        fill: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 480px) {
        width: 20px;
    }
`

export default Header;
