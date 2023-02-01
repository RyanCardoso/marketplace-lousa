// Libs
import type { AppProps } from "next/app";

// Templates
import { Layout } from "@/components/templates";

// Contexts
import ProductProvider from "@/context/Products";

// Styles
import * as S from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductProvider>
      <S.GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}
