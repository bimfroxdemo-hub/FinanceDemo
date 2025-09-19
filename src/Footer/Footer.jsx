import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-600 to-yellow-600 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4 animate-slide-up">
              <h3 className="text-2xl font-bold">Finance<span className="text-yellow-600">Pro</span></h3>
              <p className="text-white/80 leading-relaxed">
                Your Trusted Financial Partner
              </p>
              <p className="text-sm text-white/70">
                Empowering individuals and businesses to achieve their financial
                goals with expert guidance and innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                {["Home", "Services", "About", "Blog", "Contact"].map((link, i) => (
                  <li key={i}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="hover:text-yellow-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <h4 className="text-lg font-semibold">Our Services</h4>
              <ul className="space-y-2 text-white/80">
                {[
                  "Investment Planning",
                  "Wealth Management",
                  "Tax Planning",
                  "Insurance Solutions",
                  "Business Advisory",
                ].map((service, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="hover:text-yellow-400 transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 group">
                  <FaPhoneAlt className="w-5 h-5 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/80 group-hover:text-yellow-300 transition-colors duration-300">
                    +91 98765 43210
                  </span>
                </div>
                <div className="flex items-center space-x-3 group">
                  <FaEnvelope className="w-5 h-5 text-yellow-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/80 group-hover:text-yellow-300 transition-colors duration-300">
                    info@financepro.com
                  </span>
                </div>
                <div className="flex items-start space-x-3 group">
                  <FaMapMarkerAlt className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/80 group-hover:text-yellow-300 transition-colors duration-300">
                    123 Business District, Financial Plaza <br />
                    Mumbai, Maharashtra 400001
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/20"></div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-white/70 text-sm">
              Copyright © 2025 Finance<span className="text-yellow-600">Pro</span> | All Rights Reserved.
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-4">
              <span className="text-white/70 text-sm mr-2">Follow Us:</span>
              {[FaLinkedin, FaInstagram, FaYoutube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-indigo-900 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;