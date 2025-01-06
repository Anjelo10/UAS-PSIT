import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { PiTiktokLogo } from "react-icons/pi";

function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-xl font-bold">MyWebsite</h1>
          <p className="text-sm text-secondary">
            © 2025 MyWebsite. All Rights Reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4 text-sm">
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
          <a href="#services" className="hover:text-gray-300">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/anjelo.nathanael"
            className="hover:text-gray-300"
          >
            <LuFacebook />
          </a>
          <a
            href="https://wa.me/6285243536699/?text=Hello"
            className="hover:text-gray-300"
          >
            <BsTelephone />
          </a>
          <a
            href="https://www.instagram.com/anjelonatanaelx/"
            className="hover:text-gray-300"
          >
            <LuInstagram />
          </a>
          <a
            href="https://www.tiktok.com/@anjelooo_ntnl"
            className="hover:text-gray-300"
          >
            <PiTiktokLogo />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
