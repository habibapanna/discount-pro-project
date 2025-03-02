import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        {/* Social Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200">
            <FaTwitter size={24} />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/habiba-panna-890a0434a" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-600">
            <FaLinkedin size={24} />
          </a>
        </div>

        {/* Profile Link */}
        <div>
          <a href="https://www.linkedin.com/in/habiba-panna-890a0434a" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:underline">
            Visit my profile
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
