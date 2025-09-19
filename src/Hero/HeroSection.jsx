import heroImage from "../assets/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional finance and business cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/70"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smart Financial Solutions for a
            <span className="text-accent"> Secure Future</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto leading-relaxed">
            From investments to tax planning, we help you grow and protect your
            wealth with expert guidance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="px-8 py-4 text-lg rounded-md bg-accent text-white font-semibold hover:bg-accent/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="https://wa.me/919876543210"
              className="relative px-8 py-4 text-lg rounded-full border border-md text-white font-semibold 
                overflow-hidden transition-all duration-500 ease-out"
            >
              <span className="relative z-10 ">Book a Free Consultation</span>
              <span
                className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-gray-600 opacity-0 
                   transition-opacity duration-500 ease-out hover:opacity-100"
              ></span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
