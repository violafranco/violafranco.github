import { createGlobalStyle } from "styled-components";

const Dark = {
    BgPrimary: "#09090f",
    BgSecondary: "#151517",
    TextPrimary: "#ffffff",
    TextSecondary: "#007cdb",
};

const Light = {
    BgPrimary: "#ffffff",
    BgSecondary: "#e3e3e3",
    TextPrimary: "#09090f",
    TextSecondary: "#007cdb",
};


const Themes = {
    dark: Dark,
    light: Light,
};

export const GlobalStyle = createGlobalStyle`
    
    * {
        margin: 0;
        padding: 10px;
        box-sizing: border-box;
    }

    body {
        font-family: 'Poppins', sans-serif;
        font-size: 0.7em;
        background-color: ${({theme}) => theme.BgPrimary}; 
    }

    html{
        scroll-behavior: smooth;

        //scrollbar styles
        ::-webkit-scrollbar{
            width: 12px;
        }
        ::-webkit-scrollbar-track{
            background-color: #CCCCCC;
        }
        ::-webkit-scrollbar-thumb{
            background-color: #007cdb;
            background-image: -webkit-linear-gradient(90deg,transparent,rgba(0, 0, 0, 0.4) 50%,transparent,transparent)
        }
    
    
}
`
export default Themes;