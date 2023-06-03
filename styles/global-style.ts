import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyle = createGlobalStyle`
${normalize}
  html,
    body {
        font-family: 'Inter Variable', sans-serif;
        color: #1d2939;
    }

    a {
        color: #1d2939;
        text-decoration: none;
        cursor: pointer;

        &:hover {
           color: rgba(108, 122, 137) ;
         
        }
    }

    li {
        list-style: none;
    }
  
`;

export default GlobalStyle;
