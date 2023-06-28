import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
const GlobalStyles = createGlobalStyle`
${normalize}
    body {
        box-sizing: border-box;
        font-family: 'Inter Variable', sans-serif;
        color: #1d2939;
    }

    a {
        color: #1d2939;
        cursor: pointer;
    }

    li {
        list-style-type: none;
    }
  
`;

export default GlobalStyles;
