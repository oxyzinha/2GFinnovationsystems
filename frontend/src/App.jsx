import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const phrases = [
    "\"There is a driving force more <span class='text-blue-500 font-bold'>powerful</span> than steam, electricity and atomic energy: the <span class='text-blue-500 font-bold'>will</span>.\" - Albert Einstein"
  ];

  const images = [
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa",
    "https://images.unsplash.com/photo-1484589065579-248aad0d8b13"
  ];

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 5000);

    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(interval);
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const response = await fetch('https://formspree.io/f/mdkkjlzo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value
        })
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setFormSubmitted(true);
        e.target.reset();
        
        // Limpa a mensagem de sucesso após 5 segundos
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  // Efeito de fade in para seções
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Efeito de hover para cards
  const cardHoverVariant = {
    hover: { 
      y: -10,
      boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"
    }
  };

  return (
    <div className="bg-white text-gray-900">
      {/* Header com efeito de glassmorphism */}
      <motion.header
        className="fixed top-0 w-full backdrop-blur-sm bg-white/80 shadow-lg z-50"
        style={{ opacity }}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center py-6 px-4">
          <motion.div
            className="flex items-center gap-2 hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4361ee] to-[#7209b7] flex items-center justify-center text-white font-bold">
              2G
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#4361ee] to-[#7209b7] bg-clip-text text-transparent">
              2GF Innovation Systems
            </h1>
          </motion.div>

          {/* Mobile Menu Toggle */}
          <button
            className="block lg:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Navigation Menu */}
          <motion.nav
            className={`
              lg:flex lg:space-x-4
              ${menuOpen 
                ? 'block fixed inset-0 top-[88px] bg-white/95 backdrop-blur-md shadow-xl z-50' 
                : 'hidden'
              }
              lg:relative lg:bg-transparent lg:shadow-none
            `}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-4 lg:space-y-0">
              <div className="px-6 py-4 bg-white lg:bg-transparent lg:p-0">
                {[
                  { href: '#home', label: 'Home' },
                  { href: '#about', label: 'About' },
                  { href: '#services', label: 'Services' },
                  { href: '#success-cases', label: 'Success Cases' },
                  { href: '#partners', label: 'Partners' }
                ].map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="block px-4 py-3 mb-2 rounded-lg text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 text-base uppercase tracking-wide lg:inline-block lg:mb-0 lg:text-gray-700 lg:hover:bg-blue-50 lg:hover:text-blue-600 lg:text-sm lg:px-3 lg:py-2"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                
                <a 
                  href="#contact" 
                  className="block px-4 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-300 text-base uppercase tracking-wide text-center shadow-md lg:inline-block lg:text-sm lg:px-3 lg:py-2 lg:bg-gradient-to-r lg:from-blue-500 lg:to-blue-700 lg:hover:from-blue-600 lg:hover:to-blue-800"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </div>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="hero">
        <motion.section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-white text-center px-6 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background images */}
          {images.map((img, index) => (
            <div
              key={index}
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
              style={{
                backgroundImage: `url(${img})`,
                opacity: currentImage === index ? 1 : 0
              }}
            />
          ))}
          
          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative z-20 max-w-4xl mx-auto">
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
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition shadow-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More
              </motion.button>
              <motion.button
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-white/10 transition"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.section>
      </section>

      {/* Who We Are Section */}
      <motion.section
        id="about"
        className="py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariant}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-8"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              Who We Are
            </motion.h2>
            
            {/* Novo divisor animado */}
            <div className="relative w-32 h-1 bg-gray-200 mx-auto mb-12">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#4361ee] to-[#7209b7]"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            {/* Texto com efeito de typing */}
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              2GF Innovation Systems is a company focused on providing technological and innovative solutions for businesses seeking growth and efficiency in the digital world. With a personalized and dedicated approach, we aim to turn challenges into practical and high-impact solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Services Section com novos efeitos */}
      <motion.section
        id="services"
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <motion.span 
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-blue-600 font-semibold tracking-wider px-4 py-2 bg-blue-50 rounded-full">
                SERVICES
              </span>
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mt-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Multiple <span className="text-blue-600">solutions</span> for your business
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Smart Industry */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="text-blue-600 mb-6 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <svg className="w-12 h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Smart Industry
                </motion.h3>

                <ul className="space-y-3">
                  {[
                    "Sensors",
                    "ERP integration",
                    "Big data",
                    "Business intelligence",
                    "Energy certification",
                    "Support on the decision-making"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-600 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="mr-2 text-blue-500 group-hover/item:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="group-hover/item:text-gray-900 transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Digital Transformation */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="text-blue-600 mb-6 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <svg className="w-12 h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Digital Transformation
                </motion.h3>

                <ul className="space-y-3">
                  {[
                    "Software engineering",
                    "Software automation",
                    "Project management",
                    "Consulting",
                    "Outsourcing"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-600 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="mr-2 text-blue-500 group-hover/item:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="group-hover/item:text-gray-900 transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Smart Cities */}
            <motion.div
              className="relative group"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  className="text-blue-600 mb-6 relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="absolute inset-0 bg-blue-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                  <svg className="w-12 h-12 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </motion.div>

                <motion.h3 
                  className="text-2xl font-bold mb-4 text-gray-900"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Smart Cities
                </motion.h3>

                <ul className="space-y-3">
                  {[
                    "Internet of Things",
                    "Smart lighting",
                    "Smart parking",
                    "Smart waste management",
                    "Smart mobility"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-600 group/item"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <span className="mr-2 text-blue-500 group-hover/item:text-blue-600 transition-colors">
                        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="group-hover/item:text-gray-900 transition-colors">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Success Cases Section */}
      <motion.section
        id="success-cases"
        className="py-20 bg-gradient-to-br from-gray-800 to-gray-900 text-white relative overflow-hidden"
      >
        {/* Background parallax effect */}
        <motion.div
          className="absolute inset-0 bg-[url('/path/to/pattern.svg')] opacity-10"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 200])
          }}
        />
        
        {/* Conteúdo com fade in */}
        <motion.div
          className="relative z-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInVariant}
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
        </motion.div>
      </motion.section>

      {/* Our Partners Section */}
      <motion.section
        id="partners"
        className="py-20 bg-gray-50 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full h-24 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
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
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <motion.img
                  src={partner.src}
                  alt={partner.alt}
                  className="w-full h-24 object-contain mx-auto filter grayscale hover:grayscale-0 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 relative overflow-hidden text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Background com padrão geométrico moderno */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700">
          {/* Padrão de hexágonos */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15L30 0z' fill-rule='evenodd' stroke='%23ffffff' fill='none'/%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />

          {/* Círculos flutuantes */}
          <motion.div
            className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"
            animate={{
              y: [0, 50, 0],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-white/10 blur-2xl"
            animate={{
              y: [50, 0, 50],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="inline-block mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            >
              <div className="w-20 h-1 bg-white mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-white">Contact Us</h2>
              <div className="w-20 h-1 bg-white mx-auto mt-4" />
            </motion.div>
            <p className="text-xl text-blue-100">Get in touch with us for any questions or collaborations</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 p-4 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Email</h3>
                  <a href="mailto:hello@2gfinnovationsystems.pt" className="text-blue-100 hover:text-white transition-colors">
                    hello@2gfinnovationsystems.pt
                  </a>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 p-4 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Location</h3>
                  <p className="text-blue-100">R. António Augusto de Aguiar, 6200-053 Covilhã</p>
                </div>
              </motion.div>

              <motion.div 
                className="flex items-center space-x-4"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-white/10 p-4 rounded-lg">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">LinkedIn</h3>
                  <a href="https://www.linkedin.com/company/2gf-innovation-systems/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-blue-100 hover:text-white transition-colors">
                    Follow us
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <form onSubmit={sendEmail} className="bg-white rounded-lg shadow-xl p-8">
                <div className="mb-6">
                  <motion.input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div className="mb-6">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200"
                    whileFocus={{ scale: 1.01 }}
                  />
                </div>
                <div className="mb-6">
                  <motion.textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition duration-200 resize-none"
                    whileFocus={{ scale: 1.01 }}
                  ></motion.textarea>
                </div>
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>

              <AnimatePresence>
                {formSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-4 bg-green-500 text-white rounded-lg text-center"
                  >
                    Message sent successfully!
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Footer com efeito de gradiente animado */}
      <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
          animate={{
            backgroundPosition: ["0%", "100%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-16">
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