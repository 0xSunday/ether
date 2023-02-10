import "@/styles/globals.css";
import { Fragment } from "react";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>ETHER</title>
        <meta
          name="description"
          content="Ether website from 0xsiva#4520"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
