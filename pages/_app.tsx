import "styles/globals.scss";
import "styles/common.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";

import variables from "styles/variables.module.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
