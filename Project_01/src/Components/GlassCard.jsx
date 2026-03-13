import React from "react";

const GlassCard = () => {
  return (
    <div className="w-[280px] p-3 rounded-[28px] bg-white/40 backdrop-blur-xl shadow-xl">
      
      <div className="relative rounded-[22px] overflow-hidden">

        <img
          src="https://i.pinimg.com/736x/b6/3a/a0/b63aa0711e800eaf450de550b20860d7.jpg"
          className="w-full h-[300px] object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>

        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs">
          ✨ New-Instagram Reels Creator
        </div>

        <div className="absolute bottom-20 left-4 right-4 text-white">
          <h2 className="text-2xl font-semibold">
            Craft Your
            <span className="italic block font-light">Imaginary Escape</span>
          </h2>

          <p className="text-xs mt-2">
            The leading AI art generation and image editing tool with 3.5B+
            creations.
          </p>
        </div>

        <button className="absolute bottom-4 left-4 right-4 bg-lime-400 text-black py-2 rounded-full font-medium shadow-md hover:scale-105 transition">
          Generate Image
        </button>

      </div>

    </div>
  );
};

export default GlassCard;