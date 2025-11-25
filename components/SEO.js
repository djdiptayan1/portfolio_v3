import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function SEO({ title, description, image, article }) {
    const router = useRouter();
    const siteUrl = 'https://www.djdiptayan.in';
    const canonical = `${siteUrl}${router.asPath === '/' ? '' : router.asPath}`.split('?')[0];

    const defaultTitle = 'Diptayan Jash | Web Developer & Portfolio';
    const defaultDescription = 'Diptayan Jash is a proficient web and app developer with expertise in React, Next.js, Node.js, and more. Explore his portfolio, projects, and experience.';
    const defaultImage = `${siteUrl}/dj.png`;

    return (
        <NextSeo
            title={title ? `${title} | Diptayan Jash` : defaultTitle}
            description={description || defaultDescription}
            canonical={canonical}
            openGraph={{
                url: canonical,
                title: title ? `${title} | Diptayan Jash` : defaultTitle,
                description: description || defaultDescription,
                type: article ? 'article' : 'website',
                images: [
                    {
                        url: image || defaultImage,
                        width: 1200,
                        height: 630,
                        alt: title || 'Diptayan Jash Portfolio',
                    },
                ],
                site_name: 'Diptayan Jash Portfolio',
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
    );
}
