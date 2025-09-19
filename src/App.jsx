import React from 'react'
import Navbar from './Navbar/Navbar'
import HeroSection from './Hero/HeroSection'
import ServicesSection from './Services/ServicesSection'
import WhyChooseUsSection from './WhyChooseUS/WhyChooseUs'
import AboutSection from './About/AboutSection'
import StatsSection from './Stats/StatsSection'
import TestimonialsSection from './Testimonials/TestimonialsSection'
import BlogSection from './Blog/BlogSection'
import CTASection from './Ctac/CTASection'
import ContactSection from './Contact/ContactSection'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>

      <section id="services">
        <ServicesSection />
      </section>  

      <section id="why-choose-us">
        <WhyChooseUsSection />
      </section>  

      <section id="about">
        <AboutSection />
      </section>  

      <section id="stats">
        <StatsSection />
      </section> 

      <TestimonialsSection />

      <section id="blog">
        <BlogSection />
      </section>

      <CTASection />

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />
    </div>
  )
}

export default App
