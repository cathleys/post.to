import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyle = createGlobalStyle`
${normalize}
  html,
    body {
        font-family: 'Inter Variable', sans-serif;
     
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }

    li {
        list-style-type: none;
    }
  
`;

export default GlobalStyle;
