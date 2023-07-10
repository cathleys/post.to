import "@fontsource-variable/inter";
import GlobalStyles from "@styles/global-styles";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { UserContextProvider } from "@features/ui";
import { ThemeProvider } from "@features/ui/theme-provider";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UserContextProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </UserContextProvider>
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default MyApp;
