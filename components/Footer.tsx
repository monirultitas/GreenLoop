
import React from 'react';
import { Link } from 'react-router-dom';
import { RecycleIcon, TwitterIcon, FacebookIcon, InstagramIcon } from './icons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-dark text-white">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <RecycleIcon className="h-8 w-8 text-green-accent" />
              <span className="text-2xl font-bold">GreenLoop</span>
            </Link>
            <p className="text-gray-300">
              Empowering communities to create a sustainable future, one plastic bottle at a time.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-light">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-green-accent">About Us</Link></li>
              <li><Link to="/how-it-works" className="hover:text-green-accent">How It Works</Link></li>
              <li><Link to="/impact" className="hover:text-green-accent">Our Impact</Link></li>
              <li><Link to="/get-involved" className="hover:text-green-accent">Get Involved</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-light">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Email: contact@greenloop.org</li>
              <li>Phone: +880 123 456 7890</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-light">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-green-accent"><TwitterIcon className="h-6 w-6" /></a>
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-green-accent"><FacebookIcon className="h-6 w-6" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-green-accent"><InstagramIcon className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} GreenLoop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
