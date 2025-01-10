<<<<<<< HEAD
import { motion } from "framer-motion";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-3xl font-bold underline text-center">Welcome to SportyMentor!</h1>
    </motion.div>
=======
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

function App() {
  // Estado para controlar a mensagem de sucesso
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const form = e.target;
    const formData = new FormData(form);

    // Envia o formulário usando EmailJS
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')
      .then((result) => {
        console.log('Mensagem enviada com sucesso:', result.text);
        setFormSubmitted(true);  // Atualiza o estado para mostrar a mensagem de sucesso
        form.reset();  // Limpa o formulário após o envio
      })
      .catch((error) => {
        console.log('Erro ao enviar a mensagem:', error.text);
        alert('Algo deu errado ao enviar sua mensagem. Tente novamente!');
      });
  };

  return (
    <div className="bg-gray-50 text-gray-900">

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
            <a href="#about" className="text-lg hover:text-blue-600">Sobre</a>
            <a href="#services" className="text-lg hover:text-blue-600">Serviços</a>
            <a href="#contact" className="text-lg hover:text-blue-600">Contato</a>
          </motion.nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <motion.section
        id="home"
        className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center px-6 relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="https://via.placeholder.com/1200x600/0000FF/808080?text=Desporto+Inovador" 
          alt="Desporto"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        <motion.h1
          className="text-5xl font-extrabold mb-6 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Inovação que Transforma Seu Negócio
        </motion.h1>
        <motion.p
          className="text-xl max-w-2xl mx-auto mb-8 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Oferecemos soluções tecnológicas e inovadoras que transformam desafios em oportunidades para sua empresa crescer.
        </motion.p>
        <motion.button
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-100 transition z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Saiba Mais
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
            Quem Somos
          </motion.h2>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A 2GF Innovation Systems é uma empresa focada em fornecer soluções tecnológicas e inovadoras para empresas que buscam crescimento e eficiência no mundo digital. Com uma abordagem personalizada e dedicada, buscamos transformar desafios em soluções práticas e de alto impacto.
          </motion.p>
          <motion.img
            src="https://via.placeholder.com/800x400/00FF00/000000?text=Inova%C3%A7%C3%A3o+Tecnol%C3%B3gica"
            alt="Inovação Tecnológica"
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
            Nossos Serviços
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { title: 'Consultoria Estratégica', description: 'Oferecemos consultoria especializada para otimizar processos e alinhar tecnologia aos objetivos de negócio.', image: 'https://via.placeholder.com/400x300/008CFF/FFFFFF?text=Consultoria' },
              { title: 'Desenvolvimento de Software', description: 'Desenvolvemos soluções customizadas e inovadoras que atendem às necessidades específicas de cada cliente.', image: 'https://via.placeholder.com/400x300/FF5733/FFFFFF?text=Desenvolvimento' },
              { title: 'Transformação Digital', description: 'Ajudamos sua empresa a integrar as mais recentes tecnologias, aumentando a eficiência e a competitividade.', image: 'https://via.placeholder.com/400x300/FFB6C1/FFFFFF?text=Transforma%C3%A7%C3%A3o' },
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
          Fale Conosco
        </motion.h2>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Entre em contato para saber como podemos ajudar a transformar seu negócio com soluções inovadoras.
        </motion.p>

        {/* Formulário de Contato */}
        <motion.form
          className="space-y-6 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nome</label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
                placeholder="Seu email"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensagem</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="w-full mt-2 px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900"
              placeholder="Escreva sua mensagem"
            />
          </div>

          <motion.button
            type="submit"
            className="w-full bg-white text-blue-600 px-6 py-3 rounded-full text-xl font-semibold hover:bg-gray-100 transition"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            Enviar Mensagem
          </motion.button>
        </motion.form>

        {/* Mensagem de sucesso */}
        {formSubmitted && (
          <motion.div
            className="mt-6 p-4 bg-green-500 text-white rounded-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p>Mensagem enviada com sucesso!</p>
          </motion.div>
        )}
      </motion.section>

    </div>
>>>>>>> c87ab0b6be0672a40a9c47539e77540645a906ad
  );
}

export default App;
