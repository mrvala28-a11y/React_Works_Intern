import { motion } from "framer-motion";

export default function FoodImage() {
  return (
    <>
      <motion.img
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
        className="absolute top-28 right-[-60px] w-60 rounded-full shadow-2xl"
      />

      <motion.img
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        src="https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5"
        className="absolute bottom-28 right-2 w-24 rounded-full shadow-xl"
      />
    </>
  );
}