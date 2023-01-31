// Libs
import type { AppProps } from "next/app";

// Styles
import * as S from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <S.GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
