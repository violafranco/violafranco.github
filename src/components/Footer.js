import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return ( 
        <Text>Made with 💙 by Franco Viola</Text>
     );
}

const Text = styled.h2`
    margin-top: 1em;
    color: ${({theme}) => theme.TextPrimary};
    text-align: center;

    @media (max-width: 480px) {
        margin-left: 1.7em;
    }
`
 
export default Footer;