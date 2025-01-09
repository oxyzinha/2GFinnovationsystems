import { motion } from 'framer-motion'; // Importando o Framer Motion

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <motion.h1
        className="text-4xl font-bold text-red-500"
        initial={{ opacity: 0 }} // Início da animação
        animate={{ opacity: 1 }} // Estado final da animação
        transition={{ duration: 1 }} // Tempo da animação
      >
        Hello, Tailwind!
      </motion.h1>
      
      <motion.div
        className="text-2xl font-semibold text-blue-500 mt-4"
        initial={{ opacity: 0 }} // Início da animação
        animate={{ opacity: 1 }} // Estado final da animação
        transition={{ duration: 1, delay: 1 }} // Tempo da animação com delay
      >
        Se você ver esta animação, o Framer Motion está funcionando!
      </motion.div>
    </div>
  );
}

export default App;
