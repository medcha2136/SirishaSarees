import { Link } from 'react-router-dom';
import { ShoppingBag, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-serif text-xl font-bold bg-gold-gradient bg-clip-text text-transparent">
                Sirisha Sarees
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Crafting timeless elegance with premium fabrics and traditional artistry. 
              Experience the perfect blend of heritage and contemporary style.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <FaFacebookF className="h-5 w-5" />
              </a> */}
              <a href="https://www.instagram.com/_sirisha.sarees?igsh=MXB4aWpnbG1jcnB2Yw==" target='_blank' className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a target='_blank' href="https://youtube.com/@sirisha.sarees?si=1R47tEXuygGpGX33" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/collections" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Premium Sarees
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Dress Materials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Traditional Tops
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Saree Fabrics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+91 9848402520</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">sirisha.sarees@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Sainath Complex, Vanasthalipuram Near Kappala Cheruvu, Hyderabad-500070
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Sirisha Sarees. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200" >
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;