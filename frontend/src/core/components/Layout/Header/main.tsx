import React from 'react';
import Link from 'next/link';

/**
 * @component Header
 * @summary The main header and navigation bar for the application.
 * @domain Core
 * @type layout-component
 */
export const Header = () => {
  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          TDD Consulting
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button can be added here */}
      </nav>
    </header>
  );
};
