import React, { useState, useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AdultContentModal from '../components/AdultContentModal';
import { RESTRICTED_CATEGORIES } from '../constants';

// Since we are using Tailwind via CDN in _document, we don't need global css import here 
// for the basic setup, but typically you would import globals.css here.

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  // -- Adult Content Logic (Migrated from App.tsx) --
  const [showAdultModal, setShowAdultModal] = useState(false);
  const [pendingRoute, setPendingRoute] = useState<{page: string, params?: any} | null>(null);
  
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    // Check session storage on mount
    const verified = sessionStorage.getItem('adult_verified') === 'true';
    setIsVerified(verified);
  }, []);

  // -- Navigation Adapter --
  // This function adapts the 'onNavigate' prop expected by your components 
  // to Next.js router.push calls.
  const navigate = (page: string, params?: any) => {
    
    // Check restricted categories
    if (page === 'listing' && params?.category && RESTRICTED_CATEGORIES.includes(params.category)) {
      if (!isVerified) {
        setPendingRoute({ page, params });
        setShowAdultModal(true);
        return;
      }
    }

    executeNavigation(page, params);
  };

  const executeNavigation = (page: string, params?: any) => {
    let path = '/';
    let query = { ...params };

    switch (page) {
      case 'home':
        path = '/';
        break;
      case 'listing':
        path = '/listing';
        break;
      case 'detail':
        path = '/detail';
        break;
      case 'publish':
        path = '/publish';
        break;
      default:
        path = '/';
    }

    router.push({ pathname: path, query });
  };

  const handleAdultConfirm = () => {
    setIsVerified(true);
    sessionStorage.setItem('adult_verified', 'true');
    setShowAdultModal(false);
    if (pendingRoute) {
      executeNavigation(pendingRoute.page, pendingRoute.params);
      setPendingRoute(null);
    }
  };

  const handleAdultCancel = () => {
    setShowAdultModal(false);
    setPendingRoute(null);
  };

  return (
    <>
      <Head>
        <title>ClassiWeb - Classificados Premium</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <div className="flex flex-col min-h-screen">
        <Header onNavigate={navigate} />
        
        <AdultContentModal 
          isOpen={showAdultModal} 
          onConfirm={handleAdultConfirm} 
          onCancel={handleAdultCancel} 
        />
        
        <main className="flex-grow">
          {/* Inject onNavigate and route params into pages */}
          <Component {...pageProps} onNavigate={navigate} />
        </main>
        
        <Footer />
      </div>
    </>
  );
}