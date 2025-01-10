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
  );
}

export default App;
