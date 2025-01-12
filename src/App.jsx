// src/App.jsx
import React from "react";
import './App.css';

function App() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen relative" style={{ backgroundImage: 'url(/path_to_your_image)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center p-8">
          <h1 className="text-4xl font-semibold">Welcome to Sporty Mentor</h1>
          <p className="text-xl mt-4">Empowering your journey to fitness success!</p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="text-lg mt-4">We provide world-class training and mentorship for fitness enthusiasts.</p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-8 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            <div className="service-card">
              <h3 className="text-xl">Personal Training</h3>
              <p>One-on-one fitness sessions designed just for you!</p>
            </div>
            <div className="service-card">
              <h3 className="text-xl">Group Classes</h3>
              <p>Join our community classes and stay motivated!</p>
            </div>
            <div className="service-card">
              <h3 className="text-xl">Nutrition Plans</h3>
              <p>Custom meal plans to fuel your workouts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold">Contact Us</h2>
          <form className="mt-8 space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-4 border border-gray-300 rounded-md"/>
            <input type="email" placeholder="Your Email" className="w-full p-4 border border-gray-300 rounded-md"/>
            <textarea placeholder="Your Message" className="w-full p-4 border border-gray-300 rounded-md"></textarea>
            <button type="submit" className="w-full bg-blue-500 text-white p-4 rounded-md">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
