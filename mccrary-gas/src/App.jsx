import React, { useState } from 'react';
import { 
  Flame, 
  Truck, 
  Wrench, 
  PhoneCall, 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 font-sans selection:bg-orange-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <Flame className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold tracking-tight text-white uppercase">
                McCrary<span className="text-orange-500">Gas</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-neutral-300 hover:text-orange-500 transition-colors font-medium">Home</a>
              <a href="#services" className="text-neutral-300 hover:text-orange-500 transition-colors font-medium">Services</a>
              <a href="#about" className="text-neutral-300 hover:text-orange-500 transition-colors font-medium">About Us</a>
              <a href="#contact" className="text-neutral-300 hover:text-orange-500 transition-colors font-medium">Contact</a>
              <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-md font-bold transition-colors">
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={toggleMenu}
                className="text-neutral-300 hover:text-white focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-neutral-900 border-b border-neutral-800 absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-orange-500 hover:bg-neutral-800 rounded-md">Home</a>
              <a href="#services" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-orange-500 hover:bg-neutral-800 rounded-md">Services</a>
              <a href="#about" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-orange-500 hover:bg-neutral-800 rounded-md">About Us</a>
              <a href="#contact" onClick={toggleMenu} className="block px-3 py-2 text-base font-medium text-neutral-300 hover:text-orange-500 hover:bg-neutral-800 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-neutral-950 opacity-90"></div>
          {/* Subtle grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          {/* Orange glow effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-orange-600/20 blur-[120px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6">
            <ShieldCheck className="w-4 h-4" />
            Reliable Energy Solutions Since 1998
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Powering Your <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Life & Business
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto mb-10">
            Safe, dependable, and affordable gas delivery and services for residential, commercial, and industrial needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_25px_rgba(249,115,22,0.5)] flex items-center justify-center gap-2">
              Schedule Delivery <ChevronRight className="w-5 h-5" />
            </a>
            <a href="#services" className="bg-neutral-800 hover:bg-neutral-700 text-white border border-neutral-700 px-8 py-4 rounded-md font-bold text-lg transition-all flex items-center justify-center">
              Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-900 border-y border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Our Services</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Comprehensive gas solutions tailored to meet the exact demands of your home or facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-colors group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Flame className="w-7 h-7 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Residential Propane</h3>
              <p className="text-neutral-400 mb-6 line-clamp-3">
                Keep your home warm and your appliances running smoothly with our dependable residential propane delivery and tank installation services.
              </p>
              <a href="#contact" className="text-orange-500 font-medium hover:text-orange-400 inline-flex items-center gap-1">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 2 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-colors group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Truck className="w-7 h-7 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Commercial Gas Delivery</h3>
              <p className="text-neutral-400 mb-6 line-clamp-3">
                Bulk delivery solutions for restaurants, warehouses, and agricultural businesses. We ensure you never run out of fuel during peak operations.
              </p>
              <a href="#contact" className="text-orange-500 font-medium hover:text-orange-400 inline-flex items-center gap-1">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </div>

            {/* Service 3 */}
            <div className="bg-neutral-950 p-8 rounded-xl border border-neutral-800 hover:border-orange-500/50 transition-colors group">
              <div className="w-14 h-14 bg-orange-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Wrench className="w-7 h-7 text-orange-500 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Equipment Maintenance</h3>
              <p className="text-neutral-400 mb-6 line-clamp-3">
                Certified technicians available for routine maintenance, safety inspections, and emergency repairs of gas lines, tanks, and connected appliances.
              </p>
              <a href="#contact" className="text-orange-500 font-medium hover:text-orange-400 inline-flex items-center gap-1">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative">
                {/* Abstract shape representing a tank/industrial element */}
                <div className="aspect-square rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden relative flex items-center justify-center">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ea580c_0%,transparent_50%)] opacity-20"></div>
                  <Flame className="w-48 h-48 text-neutral-800" />
                  
                  {/* Floating stats box */}
                  <div className="absolute bottom-6 -right-6 md:right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
                    <p className="text-4xl font-extrabold">25+</p>
                    <p className="text-sm font-medium uppercase tracking-wider">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 uppercase tracking-wide">About McCrary Gas</h2>
              <p className="text-neutral-300 text-lg mb-6 leading-relaxed">
                Founded on the principles of safety, reliability, and community trust, McCrary Gas has grown from a small local supplier to a premier energy partner for the region. 
              </p>
              <p className="text-neutral-400 mb-8 leading-relaxed">
                We understand that gas is more than just fuel—it's the heat in your home, the fire in your restaurant's kitchen, and the power behind your industrial machinery. Our dedicated team works around the clock to ensure your supply is seamless and your equipment is safe.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  <span className="text-neutral-300">24/7 Emergency Dispatch Available</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  <span className="text-neutral-300">Licensed & Insured Professionals</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                  </div>
                  <span className="text-neutral-300">Competitive & Transparent Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 uppercase tracking-wide">Get In Touch</h2>
              <div className="w-24 h-1 bg-orange-500 rounded-full mb-8"></div>
              <p className="text-neutral-400 mb-10 text-lg">
                Ready to set up a new service or need a refill? Contact our team today for fast, friendly assistance.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneCall className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Call Us</h4>
                    <p className="text-neutral-400 text-sm mb-1">Mon-Fri from 8am to 5pm</p>
                    <a href="tel:+15551234567" className="text-orange-500 font-semibold text-xl hover:text-orange-400 transition-colors">
                      (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                    <p className="text-neutral-400 text-sm mb-1">We'll respond within 24 hours</p>
                    <a href="mailto:info@mccrarygas.com" className="text-orange-500 font-semibold hover:text-orange-400 transition-colors">
                      info@mccrarygas.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-neutral-950 border border-neutral-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Headquarters</h4>
                    <p className="text-neutral-400">
                      123 Energy Parkway<br />
                      Industrial District, ST 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-neutral-950 p-8 rounded-2xl border border-neutral-800">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-neutral-400 mb-1">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-neutral-400 mb-1">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-1">Email Address</label>
                  <input type="email" id="email" className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-400 mb-1">Service Needed</label>
                  <select id="service" className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors appearance-none">
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Propane</option>
                    <option value="commercial">Commercial Gas</option>
                    <option value="maintenance">Maintenance & Repair</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-1">Message</label>
                  <textarea id="message" rows={4} className="w-full bg-neutral-900 border border-neutral-800 rounded-md px-4 py-3 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md transition-colors mt-2">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
              <Flame className="h-6 w-6 text-orange-500" />
              <span className="text-xl font-bold tracking-tight text-white uppercase">
                McCrary<span className="text-orange-500">Gas</span>
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm text-neutral-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="https://mccrarygas.com" className="hover:text-orange-500 transition-colors">mccrarygas.com</a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} McCrary Gas. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}