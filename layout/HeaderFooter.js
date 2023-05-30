import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
const HeaderFooter = props => {
  const { activeIndex, scrolling } = props;
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Head>
        <title>BISO SWAP</title>
        <meta charSet="utf-8" />
        <meta name="renderer" content="webkit" />
        <meta name="author" content="BISO SWAP" />
        <meta name="generator" content="BISO SWAP" />
        <meta name="copyright" content="BISO SWAP" />
        {/* <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta httpEquiv="Cache-Control" content="no-transform" />
          <meta httpEquiv="Cache-Control" content="no-siteapp" /> */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="bookmark" href="/favicon.ico" />
        <meta name="description" content="BISO SWAP" />
        <meta name="keywords" content="BISO SWAP" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        {/* <script src="/js/viewport.js"></script> */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-X2NVSQMYBS"></script> */}
      </Head>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-X2NVSQMYBS" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GA_MEASUREMENT_ID');
        `}
      </Script>
      <Header activeIndex={activeIndex} scrolling={scrolling} />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default HeaderFooter;
