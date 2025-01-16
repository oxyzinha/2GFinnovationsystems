import React from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  // State to control success message
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="bg-white text-gray-900">

      {/* Header */}
      <motion.header
        className="fixed top-0 w-full bg-white shadow-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
          <motion.h1
            className="text-2xl font-bold text-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            2GF Innovation Systems
          </motion.h1>
          <motion.nav
            className="space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <a href="#home" className="text-lg hover:text-blue-600">Home</a>
            <a href="#about" className="text-lg hover:text-blue-600">About</a>
            <a href="#services" className="text-lg hover:text-blue-600">Services</a>
            <a href="#contact" className="text-lg hover:text-blue-600">Contact</a>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-purple-700 text-white text-center px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg"
          alt="Web Development"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <motion.h1
          className="text-5xl font-extrabold mb-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Innovation That Transforms Your Business
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl mx-auto mb-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          We provide technological and innovative solutions that turn challenges into opportunities for your company to grow.
        </motion.p>
        <motion.button
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-100 transition z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Learn More
        </motion.button>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-16 bg-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            2GF Innovation Systems is a company focused on providing technological and innovative solutions for businesses seeking growth and efficiency in the digital world. With a personalized and dedicated approach, we aim to turn challenges into practical and high-impact solutions.
          </motion.p>
          <motion.img
            src="https://uhalpern.github.io/img/design/design-pattern-big1.png"
            alt="Technological Innovation"
            className="mx-auto rounded-xl shadow-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-16 bg-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-screen-lg mx-auto text-center">
          <motion.h2
            className="text-4xl font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: 'Strategic Consulting', description: 'We offer specialized consulting to optimize processes and align technology with business goals.', image: 'https://heflocom.s3.amazonaws.com/wp-content/uploads/sites/2/2017/03/what-is-strategy-consulting.jpg' },
              { title: 'Software Development', description: 'We develop customized and innovative solutions tailored to meet the specific needs of each client.', image: 'https://image.freepik.com/vetores-gratis/desenvolvimento-de-software-linguagem-de-programacao-codificacao_284092-33.jpg' },
              { title: 'Digital Transformation', description: 'We help your business integrate the latest technologies, increasing efficiency and competitiveness.', image: 'https://images.nightcafe.studio/jobs/knoJqFvrzxueAQoinKG8/knoJqFvrzxueAQoinKG8--1--xgjl7.jpg?tr=w-1600,c-at_max' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white shadow-lg rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.5 }}
              >
                <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 bg-blue-500 text-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Contact Us
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Reach out to us to learn how we can help transform your business with innovative solutions.
        </motion.p>

        {/* Contact Form */}
        <motion.form
          className="space-y-6 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          action="https://formspree.io/f/mdkkjlzo"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            fetch(e.target.action, {
              method: 'POST',
              body: formData,
            })
            .then(response => {
              if (response.ok) {
                setFormSubmitted(true);
                e.target.reset();
                setTimeout(() => {
                  setFormSubmitted(false);
                }, 5000);
              }
            })
            .catch(error => {
              console.error('Error:', error);
              alert('Failed to send message. Please try again.');
            });
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-md shadow-md">
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="Your name"
                required
              />
            </div>
            <div className="bg-white p-4 rounded-md shadow-md">
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="Your email"
                required
              />
            </div>
          </div>

          <div className="bg-white p-4 rounded-md shadow-md">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              placeholder="Your message"
              style={{ backgroundColor: '#ffffff' }}
              required
            />
          </div>

          {/* Success Message */}
          {formSubmitted && (
            <motion.div
              className="mt-6 p-4 bg-green-500 text-white rounded-md"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-center font-semibold">
                Thank you! Your message has been sent successfully. We'll get back to you soon.
              </p>
            </motion.div>
          )}

          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-700 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.section>

    </div>
  );
}

export default App;
