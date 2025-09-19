import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Investment Plans" },
  { value: 100, suffix: " Cr+", label: "Wealth Managed", prefix: "₹" },
  { value: 95, suffix: "%", label: "Client Retention" }
];

const Counter = ({ value, suffix = "", prefix = "", label, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // wait until section is visible

    const duration = 2000; // 2s
    const steps = 60;
    const stepValue = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value, start]);

  return (
    <div className="text-center animate-scale-in">
      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
        {prefix}{count}{suffix}
      </div>
      <div className="text-lg text-white font-medium">
        {label}
      </div>
    </div>
  );
};

const StatsSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-r from-gray-600 to-yellow-600 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Track Record Speaks
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 text-white md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="animate-slide-up text-white"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Counter {...stat} start={inView} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
