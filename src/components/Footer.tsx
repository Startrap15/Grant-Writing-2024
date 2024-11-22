import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">GrantCraft Pro</h3>
            <p className="mb-4">Expert grant writing services for organizations worldwide.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#005eff]"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#005eff]"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#005eff]"><Linkedin className="h-5 w-5" /></a>
              <a href="#" className="hover:text-[#005eff]"><Instagram className="h-5 w-5" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[#005eff]">Services</a></li>
              <li><a href="#" className="hover:text-[#005eff]">About Us</a></li>
              <li><a href="#" className="hover:text-[#005eff]">Resources</a></li>
              <li><a href="#" className="hover:text-[#005eff]">Blog</a></li>
              <li><a href="#" className="hover:text-[#005eff]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                info@grantcraftpro.com
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                123 Grant Street, Suite 100<br />New York, NY 10001
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest grant opportunities and tips.</p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:border-[#005eff]"
              />
              <button className="w-full bg-[#005eff] text-white px-4 py-2 rounded hover:bg-[#0046cc] transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} GrantCraft Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}