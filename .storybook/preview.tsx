import type { Preview } from "@storybook/react";
import { withThemeFromJSXProvider } from "@storybook/addon-styling";
import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}
    body {
        font-family: "Inter", sans-serif;
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

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles,
  }),
];
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
