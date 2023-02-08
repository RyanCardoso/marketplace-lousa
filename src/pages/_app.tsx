// Libs
import { useEffect } from "react";
import type { AppProps } from "next/app";
import AOS from "aos";
import "aos/dist/aos.css";

// Templates
import { Layout } from "@/components/templates";

// Contexts
import ProductProvider from "@/context/Products";

// Styles
import * as S from "@/styles/globals";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ offset: 200, duration: 700 });
  });

  return (
    <ProductProvider>
      <S.GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}
