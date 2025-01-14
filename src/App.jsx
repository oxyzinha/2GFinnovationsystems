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
            className={`
              lg:flex lg:space-x-8
              ${menuOpen ? 'block fixed inset-0 bg-white/95 backdrop-blur-sm pt-20' : 'hidden'}
              lg:relative lg:bg-transparent lg:pt-0 lg:block
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 px-4 lg:px-0">
              {['Home', 'About', 'Services', 'Partners', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white text-center px-6 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black opacity-75 z-0"></div>
        <img
          src="https://static.vecteezy.com/system/resources/previews/000/523/309/original/web-development-and-programming-coding-concept-seo-optimization-modern-web-design-on-laptop-screen-vector.jpg"
          alt="Web Development"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Innovation That{' '}
            <span className="text-blue-300">
              Transforms
            </span>
            <br/>
            Your Business
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-medium text-gray-100 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We provide technological and innovative solutions that turn challenges into opportunities for your company to grow.
          </motion.p>
          
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 leading-relaxed mb-12 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            2GF Innovation Systems is a company focused on providing technological and innovative solutions for businesses seeking growth and efficiency in the digital world. With a personalized and dedicated approach, we aim to turn challenges into practical and high-impact solutions.
          </motion.p>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Strategic Consulting', description: 'We offer specialized consulting to optimize processes and align technology with business goals.', image: 'https://heflocom.s3.amazonaws.com/wp-content/uploads/sites/2/2017/03/what-is-strategy-consulting.jpg' },
              { title: 'Software Development', description: 'We develop customized and innovative solutions tailored to meet the specific needs of each client.', image: 'https://image.freepik.com/vetores-gratis/desenvolvimento-de-software-linguagem-de-programacao-codificacao_284092-33.jpg' },
              { title: 'Digital Transformation', description: 'We help your business integrate the latest technologies, increasing efficiency and competitiveness.', image: 'https://images.nightcafe.studio/jobs/knoJqFvrzxueAQoinKG8/knoJqFvrzxueAQoinKG8--1--xgjl7.jpg?tr=w-1600,c-at_max' },
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.03 }}
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Partners Section */}
      <motion.section
        id="partners"
        className="py-20 bg-gray-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800"
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
