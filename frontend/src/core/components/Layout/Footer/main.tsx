import React from 'react';

/**
 * @component Footer
 * @summary The main footer component for the application.
 * @domain Core
 * @type layout-component
 */
export const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-6 text-center">
        <p>&copy; {new Date().getFullYear()} TDD Consulting. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="hover:underline px-2">Privacy Policy</a>
          <span className="px-1">|</span>
          <a href="#" className="hover:underline px-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
