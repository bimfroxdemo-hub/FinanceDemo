const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              More Than Finance - We Build Trust
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our mission is to simplify finance and empower people to achieve their goals. 
              With a team of certified experts, we're here to guide you at every step.
            </p>
          </div>
          
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Company Timeline */}
            <div className="animate-slide-up">
              <h3 className="text-2xl font-bold text-black mb-8">Our Journey</h3>
              <div className="space-y-6">
                {[
                  {
                    year: "2015 - Foundation",
                    desc: "FinancePro was founded with a vision to democratize financial planning"
                  },
                  {
                    year: "2018 - Expansion",
                    desc: "Expanded services to include wealth management and business advisory"
                  },
                  {
                    year: "2022 - Digital Innovation",
                    desc: "Launched digital platform for seamless client experience"
                  },
                  {
                    year: "2025 - Leading Excellence",
                    desc: "Recognized as a top financial advisory firm with 1000+ clients"
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-600 to-gray-400 mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-primary">{item.year}</div>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mission & Values */}
            <div className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold text-primary mb-8">Our Values</h3>
              <div className="space-y-6 bg-gray-100">
                {[
                  {
                    title: "Transparency",
                    desc: "Clear communication and honest advice in every interaction"
                  },
                  {
                    title: "Excellence",
                    desc: "Continuous learning and improvement to serve you better"
                  },
                  {
                    title: "Trust",
                    desc: "Building long-term relationships based on mutual respect"
                  }
                ].map((val, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-lg border-none bg-white shadow-sm hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-primary mb-2">{val.title}</h4>
                    <p className="text-muted-foreground">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
