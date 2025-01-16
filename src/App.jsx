import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const phrases = [
    "\"There is a driving force more <span class='text-blue-500 font-bold'>powerful</span> than steam, electricity and atomic energy: the <span class='text-blue-500 font-bold'>will</span>.\" - Albert Einstein"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

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
              <a href="#home" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#about" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#services" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#success-cases" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Success Cases</a>
              <a href="#partners" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Partners</a>
              <a href="#contact" className="text-lg hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</a>
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
          
          <div className="overflow-hidden">
            <motion.p
              key={currentPhraseIndex}
              animate={{ 
                y: [0, -2, 0, 2, 0],
                scale: [1, 1.01, 1, 1.01, 1],
                filter: [
                  'drop-shadow(0 0 0px rgba(59, 130, 246, 0))',
                  'drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))',
                  'drop-shadow(0 0 0px rgba(59, 130, 246, 0))',
                  'drop-shadow(0 0 2px rgba(59, 130, 246, 0.3))',
                  'drop-shadow(0 0 0px rgba(59, 130, 246, 0))'
                ]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 font-medium text-gray-100 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: phrases[currentPhraseIndex] }}
            />
          </div>
          
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition shadow-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            onClick={() => {
              document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.section>

      {/* Who We Are Section */}
      <section id="about" className="py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Who We Are</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            2GF Innovation Systems is a company focused on providing technological and innovative solutions for businesses seeking growth and efficiency in the digital world. With a personalized and dedicated approach, we aim to turn challenges into practical and high-impact solutions.
          </p>

          {/* New Animated Divider */}
          <motion.div 
            className="flex justify-center items-center py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-16 flex items-center justify-center">
              {/* Animated circles */}
              {[...Array(3)].map((_, index) => (
                <motion.div
                  key={index}
                  className="absolute w-16 h-16 rounded-full border-2 border-blue-500"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.8, 0.3],
                    rotate: [0, 180, 360]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.4,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Central animated icon */}
              <motion.div
                className="relative z-10 text-blue-500"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <svg 
                  className="w-8 h-8" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </motion.div>

              {/* Animated lines */}
              <motion.div
                className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="py-20 bg-gradient-to-b from-gray-50 to-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 font-semibold mb-4">SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Multiple <span className="text-blue-600">solutions</span> for your business
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Industry */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="text-blue-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Industry</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Sensors
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    ERP integration
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Big data
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Business intelligence
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Energy certification
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Support on the decision-making
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="text-blue-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Digital Transformation</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Software engineering
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Software automation
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Project management
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Consulting
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Outsourcing
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Smart Cities */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="text-blue-600 mb-6">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">Smart Cities</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Internet of Things
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Green data spaces
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Precision farming
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    Consulting
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Success Cases Section */}
      <motion.section
        id="success-cases"
        className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Success Cases</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet some of our successful collaborators and their achievements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Case 1 */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                    <img
                      src="URL_DA_FOTO_PESSOA_1"
                      alt="Nome da Pessoa 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Nome da Pessoa 1</h3>
                    <p className="text-blue-400">Cargo/Posição</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "Depoimento da pessoa sobre como o projeto/colaboração foi bem-sucedido e os resultados alcançados."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-400">
                    <span className="font-semibold">Ver Detalhes</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Case 2 */}
            <motion.div
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
              whileHover={{ y: -10 }}
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden mr-6">
                    <img
                      src="URL_DA_FOTO_PESSOA_2"
                      alt="Nome da Pessoa 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Nome da Pessoa 2</h3>
                    <p className="text-blue-400">Cargo/Posição</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "Depoimento da pessoa sobre como o projeto/colaboração foi bem-sucedido e os resultados alcançados."
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-blue-400">
                    <span className="font-semibold">Ver Detalhes</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <div className="flex space-x-2">
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
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
                  <a href="mailto:hello@2gfinnovationsystems.pt" className="text-blue-100 hover:text-blue-300 transition-colors">
                    hello@2gfinnovationsystems.pt
                  </a>
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
                  <p className="text-blue-100">R. António Augusto de Aguiar, 6200-053 Covilhã</p>
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

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300">
        {/* Main Footer */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white mb-6">2GF Innovation Systems</h3>
              <p className="text-sm leading-relaxed">
                Company focused on providing technological and innovative solutions for businesses seeking growth and efficiency in the digital world.
              </p>
              <div className="flex space-x-4 mt-6">
                <a href="https://www.linkedin.com/company/2gf-innovation-systems/" 
                   className="text-gray-400 hover:text-blue-400 transition-colors"
                   target="_blank"
                   rel="noopener noreferrer"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
                </li>
                <li>
                  <a href="#success-cases" className="hover:text-blue-400 transition-colors">Success Cases</a>
                </li>
                <li>
                  <a href="#partners" className="hover:text-blue-400 transition-colors">Partners</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>R. António Augusto de Aguiar, 6200-053 Covilhã</span>
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@2gfinnovationsystems.pt" className="hover:text-blue-400 transition-colors">
                    hello@2gfinnovationsystems.pt
                  </a>
                </li>
              </ul>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Business Hours</h3>
              <ul className="space-y-3">
                <li>Monday - Friday</li>
                <li>09:00 AM - 06:00 PM</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm">
                © {new Date().getFullYear()} 2GF Innovation Systems. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm hover:text-blue-400 transition-colors">Terms of Use</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
