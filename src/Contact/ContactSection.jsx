import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your financial journey? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-8 animate-slide-up">
            {/* Phone */}
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaPhone className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-indigo-600">Call Us</div>
                  <div className="text-gray-600 text-sm sm:text-base">+91 98765 43210</div>
                </div>
              </div>
              <a
                href="tel:+919876543210"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition text-center"
              >
                Call Now
              </a>
            </div>

            {/* Email */}
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaEnvelope className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-indigo-600">Email Us</div>
                  <div className="text-gray-600 text-sm sm:text-base">info@financepro.com</div>
                </div>
              </div>
              <a
                href="mailto:info@financepro.com"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition text-center"
              >
                Send Email
              </a>
            </div>

            {/* Address */}
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <div className="font-semibold text-indigo-600">Visit Us</div>
                  <div className="text-gray-600 text-sm sm:text-base">
                    123 Business District, Financial Plaza <br />
                    Mumbai, Maharashtra 400001
                  </div>
                </div>
              </div>
              <a
                href="https://www.google.com/maps?q=Mumbai,+Maharashtra+400001"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-indigo-700 transition text-center"
              >
                View Map
              </a>
            </div>

            {/* WhatsApp */}
            <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-xl transition">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-green-600">WhatsApp</div>
                  <div className="text-gray-600 text-sm sm:text-base">+91 98765 43210</div>
                </div>
              </div>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-700 transition text-center"
              >
                Chat Now
              </a>
            </div>
          </div>

          {/* Modern Connect Instantly Card */}
          <div className="flex items-center justify-center">
            <div className="w-full bg-gradient-to-r from-gray-700 to-yellow-600 text-white rounded-2xl shadow-2xl p-6 sm:p-10 text-center animate-fade-in">
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Connect Instantly 🚀
              </h3>
              <p className="text-base sm:text-lg mb-6 opacity-90">
                Use the buttons below to call, email, or message us directly. <br />
                We’re just one click away from helping you achieve your goals.
              </p>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition transform hover:scale-105 shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Google Map at Bottom */}
        <div className="mt-12 sm:mt-16 bg-white shadow-lg rounded-xl overflow-hidden animate-slide-up">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.607008850749!2d72.82360297481836!3d18.951882156402853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1a7d0f90e0d%3A0xa5d5df62f92d8e7!2sMumbai%2C%20Maharashtra%20400001!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full h-72 sm:h-96"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
