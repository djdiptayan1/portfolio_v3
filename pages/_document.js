import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="US;IN" />
        <meta name="geo.placename" content="New York;Mumbai" />
        <meta name="rating" content="General" />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" alt="Diptayan Jash - Web Developer and Student" />
        <link rel="apple-touch-icon" href="/dj.png" />

        {/* Google Fonts Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />

        {/* Google Fonts Link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Sedgwick+Ave+Display&display=swap"
          rel="stylesheet" />

        <meta name="google-site-verification" content="google-site-verification= " />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
