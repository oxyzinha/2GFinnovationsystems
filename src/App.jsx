import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
  // State to control mobile menu toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // A lógica do backend será implementada pela sua colega
  };

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

          {/* Mobile Menu Toggle */}
          <button
            className="block lg:hidden text-blue-600"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? 'X' : '☰'}
          </button>

          {/* Navigation Menu */}
          <motion.nav
            className={`space-x-6 lg:flex ${menuOpen ? 'block' : 'hidden'} lg:block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 px-4 lg:px-0">
              <a href="#home" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#services" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#contact" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</a>
              <a href="#partners" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Partners</a>
            </div>
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

      {/* Our Partners Section */}
      <motion.section
        id="partners"
        className="py-16 bg-white text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h2
          className="text-4xl font-semibold mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Our Partners
        </motion.h2>
        {/* Primeira linha - 3 partners */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {[ 
            { 
              alt: 'Instruction Formation', 
              src: 'https://sportymentor.eu/wp-content/uploads/2023/02/logo-instruction-formation_png.png' 
            },
            { 
              alt: 'Vis Juventum Romania', 
              src: 'https://sportymentor.eu/wp-content/uploads/2023/02/Logo_Vis_Juventum-Romania.png' 
            },
            { 
              alt: 'Pour la Solidarité Belgium', 
              src: 'https://sportymentor.eu/wp-content/uploads/2023/02/LOGO_pour-la-solidarite-belgium.png' 
            }
          ].map((partner, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-md shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-full h-24 object-contain mx-auto"
              />
            </motion.div>
          ))}
        </div>

        {/* Segunda linha - 4 partners */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
          {[ 
            { 
              alt: 'Co-Funded by the EU', 
              src: 'https://epi-care.eu/wp-content/uploads/2020/12/Co-Funded_by_the_EU_logo-1024x280.png' 
            },
            { 
              alt: 'Afeji', 
              src: 'https://sportymentor.eu/wp-content/uploads/2023/02/logo-Afeji-FR.png' 
            },
            { 
              alt: 'Aproximar Portugal', 
              src: 'https://sportymentor.eu/wp-content/uploads/2023/02/LOGO-Aproximar-portugal.png' 
            },
            { 
              alt: 'Universidade da Beira Interior', 
              src: 'https://sportymentor.eu/wp-content/uploads/2023/02/UNIVERSIDADE-DA-BEIRA-INTERIOR-portugal.png' 
            }
          ].map((partner, index) => (
            <motion.div
              key={index}
              className="p-4 bg-white rounded-md shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="w-full h-24 object-contain mx-auto"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        id="contact"
        className="py-16 bg-gradient-to-br from-blue-500 to-purple-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100">Get in touch with us for any questions or collaborations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <p className="text-blue-100">contact@2gfinnovation.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-white p-3 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-blue-100">Porto, Portugal</p>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
                <div className="mb-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition duration-200 outline-none"
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition duration-200 outline-none"
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="4"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-20 transition duration-200 outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition duration-300 transform hover:scale-[1.02]"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;
