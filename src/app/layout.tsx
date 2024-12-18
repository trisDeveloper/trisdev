'use client';
import './styles/globals.scss';
import './styles/animations.scss';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import Loading from './components/layout/Loading';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { initGA } from './lib/googleAnalytics';

const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  // Initialize Google Analytics
  useEffect(() => {
    if (GA_TRACKING_ID) {
      initGA(GA_TRACKING_ID);
      if (pathname) {
        ReactGA.send({ hitType: 'pageview', page: pathname });
      }
    }
  }, [pathname]);

  // Simulate loading state (replace with actual loading logic if applicable)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang='en'>
      <head>
        <title>Tris Dev</title>
        <meta
          name='keywords'
          content='developer, creative developer, portfolio, web, full stack'
        />
        <meta property='og:title' content='Tris Dev' />
        <meta property='og:image' content='/assets/Logo/logo.png' />
        <meta property='og:description' content='A Creative Developer' />
      </head>
      <body>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </>
        )}
      </body>
    </html>
  );
};
export default RootLayout;
