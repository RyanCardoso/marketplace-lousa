// Libs
import type { AppProps } from "next/app";

// Templates
import { Layout } from "@/components/templates";

// Styles
import * as S from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <S.GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
