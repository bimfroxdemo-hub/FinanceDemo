import { useState, useEffect, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Business Owner",
    content:
      "FinancePro transformed my financial planning. Their expert guidance helped me grow my wealth by 40% in just two years.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Software Engineer",
    content:
      "The team's transparency and professionalism are unmatched. They made complex investments simple to understand and manage.",
    rating: 5,
  },
  {
    name: "Dr. Amit Kumar",
    role: "Medical Professional",
    content:
      "Excellent tax planning services! They saved me significant amounts while ensuring full compliance. Highly recommended.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Entrepreneur",
    content:
      "Their 24/7 support and personalized approach made all the difference in achieving my financial goals.",
    rating: 5,
  },
];

const SWIPE_THRESHOLD = 50;

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > SWIPE_THRESHOLD) {
      nextTestimonial();
    } else if (diff < -SWIPE_THRESHOLD) {
      prevTestimonial();
    }
    startX.current = null;
  };

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (startX.current === null) return;
    const diff = startX.current - e.clientX;

    if (diff > SWIPE_THRESHOLD) {
      nextTestimonial();
    } else if (diff < -SWIPE_THRESHOLD) {
      prevTestimonial();
    }
    startX.current = null;
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto relative">
          {/* Heading */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-500">
              Real experiences from satisfied clients who trust us with their financial future
            </p>
          </div>

          {/* Testimonial Card */}
          <div
            className="bg-white dark:bg-gray-200 shadow-xl rounded-2xl p-6 md:p-12 text-center transition-all duration-500 animate-scale-in select-none"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {/* Stars */}
            <div className="flex justify-center mb-4">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-5 h-5 md:w-6 md:h-6 text-yellow-500"
                />
              ))}
            </div>

            {/* Content */}
            <blockquote className="text-lg md:text-2xl text-gray-500 dark:text-gray-600 mb-6 md:mb-8 leading-relaxed italic">
              "{testimonials[currentIndex].content}"
            </blockquote>

            {/* Client Info */}
            <div>
              <div className="font-semibold text-indigo-600 text-base md:text-lg">
                {testimonials[currentIndex].name}
              </div>
              <div className="text-gray-500 dark:text-gray-400 text-sm md:text-base">
                {testimonials[currentIndex].role}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 translate-y-6 -translate-x-5 bg-white dark:bg-gray-400 text-indigo-600 dark:text-gray-200 p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 translate-y-6 translate-x-5 bg-white dark:bg-gray-400 text-indigo-600 dark:text-gray-200 p-3 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-600"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
