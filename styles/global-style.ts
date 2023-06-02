import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyle = createGlobalStyle`
${normalize}
  html,
    body {
        font-family: 'Inter Variable', sans-serif;
     
    }

    a {
        color: #1d2939;
        text-decoration: none;
        cursor: pointer;
    }

    li {
        list-style: none;
    }
  
`;

export default GlobalStyle;
