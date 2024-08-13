import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 text-white p-4">
        <nav>
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="flex items-center space-x-2 hover:text-gray-300">
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Your App Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;