import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FiFacebook } from "react-icons/fi";

export default function Footer({ className = "" }) {
  return (
    <footer className={`w-full border-t bg-background py-6 ${className}`}>
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side - Copyright */}
        <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Menu App. All rights reserved.</div>

        {/* Center - Navigation Links */}
        <nav className="flex space-x-4">
          <a href="/about" className="text-sm text-foreground hover:text-primary">
            About
          </a>
          <a href="/contact" className="text-sm text-foreground hover:text-primary">
            Contact
          </a>
          <a href="/privacy" className="text-sm text-foreground hover:text-primary">
            Privacy Policy
          </a>
        </nav>

        {/* Right Side - Social Media Icons */}
        <div className="flex items-center space-x-4">
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FiFacebook className="w-5 h-5 text-foreground hover:text-primary" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-5 h-5 text-foreground hover:text-primary" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 text-foreground hover:text-primary" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
