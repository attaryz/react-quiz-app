import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
}
body { 
    background-color: #000;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
* {
    box-sizing: border-box;
    color: #fff 
}
button {
    background-color: #F44708;
}
`;
