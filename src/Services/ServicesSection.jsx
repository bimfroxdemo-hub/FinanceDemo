// import { TrendingUp, CreditCard, Shield, Calculator, Users, Building } from "lucide-react";
import { MdOutlineTrendingUp } from "react-icons/md";
import { CiCreditCard2 } from "react-icons/ci";
import { FiShield } from "react-icons/fi";
import { HiCalculator } from "react-icons/hi";
import { LuUsersRound } from "react-icons/lu";
import { BsBuildingsFill } from "react-icons/bs";

const services = [
  {
    icon: MdOutlineTrendingUp,
    title: "Investment Planning",
    description: "Strategic investment solutions tailored to your financial goals and risk tolerance."
  },
  {
    icon: CiCreditCard2,
    title: "Loans & Credit",
    description: "Competitive loan products and credit solutions for personal and business needs."
  },
  {
    icon: FiShield,
    title: "Wealth Management",
    description: "Comprehensive wealth preservation and growth strategies for high-net-worth individuals."
  },
  {
    icon: HiCalculator,
    title: "Tax & Compliance",
    description: "Expert tax planning and compliance services to optimize your financial efficiency."
  },
  {
    icon: LuUsersRound,
    title: "Insurance Solutions",
    description: "Comprehensive insurance coverage to protect you and your family's future."
  },
  {
    icon: BsBuildingsFill,
    title: "Business Advisory",
    description: "Strategic business financial consulting to drive growth and profitability."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">
            Our Services - <span className="text-yellow-600">Tailored for You</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions designed to meet your unique needs and goals
          </p>
        </div>
        
        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center cursor-pointer transform transition duration-300 hover:-translate-y-2 hover:shadow-xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center bg-gradient-to-r from-yellow-600 to-gray-600">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
