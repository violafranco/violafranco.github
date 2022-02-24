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
                <Logo to="main">[Franco]</Logo>
                <Text to="main">Proyectos</Text>
                <Text to="main">Mis Skills</Text>
                <Text to="main">Sobre Mí</Text>
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
`

const BoxOne = styled.div`
    padding: 0;
    display: flex;
` 

const BoxTwo = styled.div`
    padding: 0;
    margin: 0;
`

const Logo = styled(Link)`
    font-size: 3em;
    font-family: 'Yanone Kaffeesatz', sans-serif;;
    text-decoration: none;
    color: ${({theme}) => theme.TextPrimary};
    transition: all ease-in 0.3s;

    &:hover{
        text-shadow: 0 0 25px ${({theme}) => theme.TextSecondary};
    }
`

const Text = styled(Link)`
    font-size: 1.3em;
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
`

const GitL = styled(GitHubLogo)`
    width: 7%;
    fill: ${({theme}) => theme.TextPrimary};
`

const LinkedinL = styled(LinkedinLogo)`
    width: 7%;
    fill: ${({theme}) => theme.TextPrimary};
`

export default Header;
