import { motion } from "framer-motion";

export default function BottomNav() {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-black text-white flex justify-around items-center py-4 rounded-2xl mt-8"
    >
      <motion.span whileTap={{ scale: 0.8 }}>🏠</motion.span>
      <motion.span whileTap={{ scale: 0.8 }}>⚙</motion.span>
      <motion.span whileTap={{ scale: 0.8 }}>👤</motion.span>
      <motion.span whileTap={{ scale: 0.8 }}>✏</motion.span>
    </motion.div>
  );
}