import "@fontsource-variable/inter";
import GlobalStyles from "@styles/global-styles";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SessionProvider } from "next-auth/react";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps, session: any) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;
