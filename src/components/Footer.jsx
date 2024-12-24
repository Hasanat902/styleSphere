import { Link } from "react-router-dom";
import Logo from "../assets/stylesphere.png";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/* info */}
        <div className="mb-6 md:mb-0">
          <Link to="/">
            <img src={Logo} alt="" className="w-32" />
          </Link>
          <p className="mt-2 text-sm">
            High-quality, sustainable clothing at affordable prices.
          </p>
          <p className="text-sm">Road-2, Gulshan, Dhaka</p>
          <p className="text-sm">Email: support@stylesphere.com</p>
          <p className="text-sm">Phone: +88-01777547839</p>
        </div>
        {/* customer service link */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Customer Service</h2>
          <ul className="mt-2 text-sm space-y-2">
            <li>Contact Us</li>
            <li>Shipping & Return</li>
            <li>FAQs</li>
            <li>Order and Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>
        {/* social media links */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-xl font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-2">
            <FaFacebook />
            <FaInstagram />
            <FaTwitterSquare />
            <FaPinterest />
          </div>
        </div>
        {/* newsletter subscription */}
        <div>
          <h3 className="text-xl font-semibold">Stay in the Loop</h3>
          <p className="mt-2 text-sm">
            Subscribe to get special offers, free giveaways and more.
          </p>
          <form action="" className="mt-4 flex">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-l-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            <button
              type="submit"
              className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      {/* bottom section */}
      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()}
          <span className="text-red-500"> StyleSphere</span>. All rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;