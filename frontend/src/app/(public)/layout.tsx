import React from 'react';
import { Header } from '@/core/components/Layout/Header';
import { Footer } from '@/core/components/Layout/Footer';

/**
 * @summary Layout for all public-facing pages.
 * Includes the main header and footer.
 */
export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
