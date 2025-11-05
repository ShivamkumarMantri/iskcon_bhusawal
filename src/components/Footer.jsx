import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import img from "../assets/iskcon.png";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-sm">
          
          {/* Logo + Address */}
          <div className="lg:col-span-2 text-center lg:text-left">
            <Link to="/" className="inline-flex justify-center lg:justify-start">
              <img src={img} alt="ISKCON Bhusawal" className="w-40 hover:scale-105 transition-transform duration-300" />
            </Link>
            <p className="mt-4 text-gray-400 leading-relaxed">
              <strong className="text-white">Sri Sri Radha Murlidhar Mandir</strong> <br />
              Near Roop Darshan Photo Studio,<br />
              Bhusawal, Maharashtra 425201
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><Link to="/iskcon-bhusawal" className="hover:text-indigo-400 transition-colors">About</Link></li>
              <li><Link to="/darshan" className="hover:text-indigo-400 transition-colors">Darshan</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Activities</h4>
            <ul className="space-y-2">
              <li><Link to="/weekly-programs" className="hover:text-indigo-400 transition-colors">Weekly Program</Link></li>
              <li><Link to="/iys" className="hover:text-indigo-400 transition-colors">IYS Program</Link></li>
              <li><Link to="/jagruti" className="hover:text-indigo-400 transition-colors">Jagruti Program</Link></li>
              <li><Link to="/tours" className="hover:text-indigo-400 transition-colors">Pilgrimage Tour</Link></li>
            </ul>
          </div>

          {/* Other Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Other Pages</h4>
            <ul className="space-y-2">
              <li><Link to="/donate" className="hover:text-indigo-400 transition-colors">Donate Us</Link></li>
              <li><Link to="/darshan" className="hover:text-indigo-400 transition-colors">Daily Darshan</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-n-conditions" className="hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <span className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:text-indigo-400 transition-colors font-medium">
              ISKCON Bhusawal
            </Link>. All rights reserved.
          </span>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-5 sm:mt-0">
            <a
              href="https://www.facebook.com/Iskconbhusawal.ssrm/"
              aria-label="Facebook"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
            >
              <FaFacebookF size={16} />
            </a>
            {/* <a
              href="#"
              aria-label="Twitter"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
            >
              <FaTwitter size={16} />
            </a> */}
            <a
              href="https://www.instagram.com/iskcon_bhusawal/?hl=en"
              target="_blank"
              aria-label="Instagram"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://www.youtube.com/@iskconbhusawal"
              aria-label="YouTube"
              target="_blank"
              className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors duration-300"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
