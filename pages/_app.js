import "@/styles/globals.css";
import { ThemeProvider } from "../context/ThemeContext";
import Layout from "../components/Layout";
import { DefaultSeo } from 'next-seo';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo
        title="Diptayan Jash | Web Developer & Portfolio"
        description="Diptayan Jash is a proficient web and app developer with expertise in React, Next.js, Node.js, and more. Explore his portfolio, projects, and experience."
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://www.djdiptayan.in/',
          site_name: 'Diptayan Jash Portfolio',
          images: [
            {
              url: 'https://www.djdiptayan.in/dj.png',
              width: 1200,
              height: 630,
              alt: 'Diptayan Jash Portfolio',
            },
          ],
        }}
        twitter={{
          handle: '@diptayan_jash',
          site: '@diptayan_jash',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'Diptayan Jash, Diptayan, Web Developer, Portfolio, React Developer, Next.js Developer, Software Engineer, Frontend Developer, Backend Developer, Full Stack Developer',
          },
          {
            name: 'author',
            content: 'Diptayan Jash',
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
          {
            name: 'theme-color',
            content: '#000000'
          }
        ]}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
