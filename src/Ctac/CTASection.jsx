import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-800 via-red-500 to-yellow-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 text-white">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">
              Take Control of Your
              <span className="text-yellow-400"> Finances Today</span>
            </h2>

            <p className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of satisfied clients who have secured their
              financial future with our expert guidance.
            </p>

            <button className="bg-yellow-400 text-blue-900 font-semibold text-lg sm:text-xl px-6 sm:px-10 py-3 sm:py-4 rounded-2xl shadow-lg inline-flex items-center transition-transform transform hover:scale-110 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
              <a href="https://wa.me/919876543210"
              target="_blank"
              >Schedule a Call</a>

              <FaArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2" />
            </button>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-white animate-slide-up">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                Free
              </div>
              <div className="text-base sm:text-lg">Initial Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                24/7
              </div>
              <div className="text-base sm:text-lg">Expert Support</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">
                100%
              </div>
              <div className="text-base sm:text-lg">
                Satisfaction Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
