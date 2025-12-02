import React from 'react';
import { useTheme } from '../context/ThemeContext';
import HeroSection from '../components/home/HeroSection';
import TechStackSection from '../components/home/TechStackSection';
import AboutSection from '../components/home/AboutSection';
import FeaturedWork from '../components/home/FeaturedWork';
import LatestExperience from '../components/home/LatestExperience';
import CertificationsSection from '../components/home/CertificationsSection';
import { fetchFromApi, parseDate } from '../lib/api';
import SEO from '../components/SEO';
import { ArticleJsonLd } from 'next-seo';

export default function Home({ skills, projects, experiences, certifications, resumeUrl }) {
  const { darkMode } = useTheme();

  return (
    <div className="max-w-4xl mx-auto animate-fade-in">
      <SEO
        title="Home"
        description="Dive into the diverse portfolio of Diptayan Jash, a proficient web and app developer with a strong academic background. With expertise in languages like Java, C, C++, Python, JavaScript, TypeScript, and databases like Firebase and MongoDB, he excels in server-side development."
      />
      <ArticleJsonLd
        useAppDir={false}
        url="https://www.djdiptayan.in/"
        title="Diptayan Jash | Web Developer & Portfolio"
        images={[
          'https://www.djdiptayan.in/dj.png'
        ]}
        datePublished="2024-01-01T08:00:00+08:00"
        dateModified={new Date().toISOString()}
        authorName={[
          {
            name: 'Diptayan Jash',
            url: 'https://www.djdiptayan.in',
          },
        ]}
        publisherName="Diptayan Jash"
        publisherLogo="https://www.djdiptayan.in/dj.png"
        description="Diptayan Jash is a proficient web and app developer with expertise in React, Next.js, Node.js, and more."
      />
      <HeroSection resumeUrl={resumeUrl} />
      <TechStackSection skills={skills} />
      <AboutSection />
      <FeaturedWork projects={projects} />
      <LatestExperience experiences={experiences} />
      <CertificationsSection certifications={certifications} />
      <div className={`w-full h-px ${darkMode ? 'bg-white/10' : 'bg-stone-200'}`}></div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from API - backend returns sorted data with featured items first
  const [skills, projects, experiences, certifications, socials] = await Promise.all([
    fetchFromApi('/skills'),
    fetchFromApi('/projects'),
    fetchFromApi('/experiences'),
    fetchFromApi('/certifications'),
    fetchFromApi('/socials')
  ]);

  // Extract resume URL from socials
  const resumeSocial = socials.find(s => s.name?.toLowerCase() === 'resume');
  const resumeUrl = resumeSocial?.url;

  return {
    props: {
      skills: skills || [],
      projects: projects || [],
      experiences: experiences || [],
      certifications: certifications || [],
      resumeUrl
    },
    revalidate: 60
  };
}