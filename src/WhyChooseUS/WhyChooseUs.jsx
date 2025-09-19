import { FaCheck } from "react-icons/fa6"; // ✅ using react-icons instead of lucide-react

const features = [
  "Trusted Advisors with Years of Experience",
  "Transparent & Client-Focused Approach",
  "24/7 Customer Support",
  "1000+ Satisfied Clients"
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 animate-fade-in">
            Why Choose Finance<span className="text-yellow-600">Pro?</span>
          </h2>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Icon Wrapper */}
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-600 to-gray-500 flex items-center justify-center flex-shrink-0">
                  <FaCheck className="w-4 h-4 text-white " />
                </div>

                {/* Text */}
                <span className="text-lg font-medium text-foreground text-left">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
