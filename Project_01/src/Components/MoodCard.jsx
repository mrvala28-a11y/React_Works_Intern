import { motion } from "framer-motion";
import FoodImage from "./FoodImage";
import BottomNav from "./BottomNav";

export default function MoodCard() {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-[380px] min-h-screen bg-[#d9d0c6] px-6 py-6 relative"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">

        <div className="text-2xl">☰</div>

        <h1 className="font-bold text-lg tracking-wide">
          Enjoy Your Mood
        </h1>

        <div className="text-xl">⚙</div>
      </div>

      {/* Categories */}
      <p className="text-xs text-gray-600 mb-2">Categories</p>

      <div className="flex gap-2 mb-6">
        {["steak", "Seafood", "Salad"].map((c, i) => (
          <motion.span
            whileTap={{ scale: 0.9 }}
            key={i}
            className="px-3 py-1 bg-black text-white text-xs rounded-full"
          >
            {c}
          </motion.span>
        ))}
      </div>

      {/* Info */}
      <div className="space-y-4 text-sm text-gray-800">

        <div>
          <p className="text-xs text-gray-600">Size</p>
          <h2 className="text-lg font-bold">Medium</h2>
          <p>Rp. 50.000</p>
        </div>

        <div>
          <p className="text-xs text-gray-600">Shipping Free</p>
          <h2 className="text-lg font-bold">2,6 Km</h2>
          <p>Rp. 5000</p>
        </div>

        <div>
          <p className="text-xs text-gray-600">Delivery in</p>
          <h2 className="text-lg font-bold">15 min</h2>
          <p>Motor Bike</p>
        </div>

      </div>

      {/* Counter */}
      <div className="flex items-center gap-4 mt-6">

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-black text-white rounded-lg"
        >
          -
        </motion.button>

        <span className="font-semibold">05</span>

        <motion.button
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 bg-black text-white rounded-lg"
        >
          +
        </motion.button>

        <button className="text-xl ml-2">🗑</button>

      </div>

      {/* Food Image */}
      <FoodImage />

      {/* Quote */}
      <p className="text-[10px] text-center mt-6 text-gray-700">
        "Makanan adalah bentuk kenyamanan paling primitif."
      </p>

      {/* Bottom Navigation */}
      <BottomNav />

    </motion.div>
  );
}