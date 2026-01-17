'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import AdultContentModal from './AdultContentModal';
import { RESTRICTED_CATEGORIES } from '../constants';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [isVerified, setIsVerified] = useState(false);
    const [showAdultModal, setShowAdultModal] = useState(false);

    useEffect(() => {
        // Check verification status on mount
        if (typeof window !== 'undefined') {
            const verified = sessionStorage.getItem('adult_verified') === 'true';
            setIsVerified(verified);
        }
    }, []);

    useEffect(() => {
        // Check if current route requires verification
        if (isVerified) return;

        const category = searchParams.get('category');
        // If we are on a restricted category page (Listing with category param)
        if (pathname.startsWith('/listing') && category && RESTRICTED_CATEGORIES.includes(category)) {
            setShowAdultModal(true);
        }
        // Also if we are on a detail page for adult content, strictly speaking we'd need to know the ad category.
        // However, url structure for detail is /anuncio/[id]. We don't have category in URL.
        // But the Detail component itself shows adult content.
        // For now, we assume the Detail page will handle its own "blur" or "warning" or we rely on the implementation in Detail.tsx 
        // (Note: Detail.tsx in original App.tsx didn't seem to trigger the modal via router interception, but logic in App.tsx handled it for 'listing' page navigation)
        // The App.tsx only had logic for `page === 'listing' && ...`.

    }, [pathname, searchParams, isVerified]);

    const handleAdultConfirm = () => {
        setIsVerified(true);
        sessionStorage.setItem('adult_verified', 'true');
        setShowAdultModal(false);
    };

    const handleAdultCancel = () => {
        setShowAdultModal(false);
        // Redirect to home if rejected and currently on restricted page?
        // In App.tsx, it just didn't navigate. Here we are already on the page (or mounting it).
        // Better to redirect away.
        if (typeof window !== 'undefined') {
            window.location.href = '/';
        }
    };

    return (
        <div className="flex flex-col min-h-screen font-sans text-gray-900">
            <Header />

            <AdultContentModal
                isOpen={showAdultModal}
                onConfirm={handleAdultConfirm}
                onCancel={handleAdultCancel}
            />

            <main className="flex-grow">
                {children}
            </main>
            <Footer />
        </div>
    );
}
