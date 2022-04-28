import Document, {
    DocumentContext,
    Html,
    Head,
    Main,
    NextScript,
  } from "next/document";
  
  class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
      const initialProps = await Document.getInitialProps(ctx);
  
      return initialProps;
    }
  
    render() {
      return (
        <Html>
            <Head>
                <link rel="preload" href="/fonts/Satoshi-Black.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/Satoshi-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/Satoshi-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/Satoshi-Regular.woff2" as="font" type="font/woff" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/CeraRoundProRegular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
                <link rel="preload" href="/fonts/CeraRoundProBold.woff" as="font" type="font/woff" crossOrigin="anonymous" />
            </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  
  export default MyDocument;
