import React from 'react';
import styled from 'styled-components';
import html from './../img/Skills/html.png';
import css from './../img/Skills/css.png';
import js from './../img/Skills/js.png';
import sass from './../img/Skills/sass.png';
import react from './../img/Skills/react.png';
import firebase from './../img/Skills/firebase.png';
import mysql from './../img/Skills/mysql.png';
import responsive from './../img/Skills/responsive.png';
import github from './../img/Skills/github.png';
import agile from './../img/Skills/agile.png';

const Skills = () => {
    return ( 
        <Container>
            <BoxOne>
                <Title>Mis<strong>Skills</strong></Title>
            </BoxOne>

            <BoxTwo>
                <SkillsOne>
                    <Skill>
                        <Image src={html} />
                        <Text>HTML</Text>
                    </Skill>
                    <Skill>
                        <Image src={css} />
                        <Text>CSS</Text>
                    </Skill>
                    <Skill>
                        <Image src={js} />
                        <Text>JavaScript</Text>
                    </Skill>
                    <Skill>
                        <Image src={sass} />
                        <Text>SASS</Text>
                    </Skill>
                    <Skill>
                        <Image src={react} />
                        <Text>React JS</Text>
                    </Skill>
                </SkillsOne>
                <SkillsTwo>
                    <Skill>
                        <Image src={firebase} />
                        <Text>Firebase</Text>
                    </Skill>
                    <Skill>
                        <Image src={mysql} />
                        <Text>MySQL</Text>
                    </Skill>
                    <Skill>
                        <Image src={responsive} />
                        <Text>Responsive Desing</Text>
                    </Skill>
                    <Skill>
                        <Image src={github} />
                        <Text>GitHub</Text>
                    </Skill>
                    <Skill>
                        <Image src={agile} />
                        <Text>Agile</Text>
                    </Skill>
                </SkillsTwo>
            </BoxTwo>
        </Container>
    );
}

const Container = styled.div`
    color: ${({theme}) => theme.TextPrimary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 8em;
    margin-left: 1.5em;

    @media (max-width: 680px) {
        margin-left: -3em;
    }
`

const BoxOne = styled.div`
    max-width: 850px;

    @media (max-width: 768px) {
    }

    @media (max-width: 480px) {

    }
`

const BoxTwo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 80%;

    @media (max-width: 480px) {

    }
`

const Title = styled.h2`
    font-size: 3.2em;  

    & > strong{
        color: ${({theme}) => theme.TextSecondary};
    }

    @media (max-width: 680px) {
        font-size: 2.5em; 
        margin-left: 0.4em;
        margin-bottom: -1em;
    }
`

const Skill = styled.div`
    background-color: rgb(0, 124, 219, 0.1);
    border-radius: 10%;
    width: 9.8em;
    margin-left: 1em;
    margin-top: 0;
    text-align: center;

    @media (max-width: 680px) {
        width: 8em;
        margin-left: 0.7em;
        margin-top: 0;
        text-align: center;
        padding: 0;
    }

`

const Image = styled.img`
    width: 7em;
    padding-bottom: 0;

    @media (max-width: 680px) {
        width: 5em;
        margin-left: 0.7em;
        margin-top: 0;
        text-align: center;
    }
`

const Text = styled.h3`
    padding-top: 0;
`
 
const SkillsOne = styled.div`
    display: flex;
`

const SkillsTwo = styled.div`
    display: flex;
`
export default Skills;