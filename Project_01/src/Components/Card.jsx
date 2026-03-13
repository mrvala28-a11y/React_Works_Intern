import React from "react";

const Card = () => {
  return (
    <div className="relative w-[300px] h-[420px] rounded-[28px] overflow-hidden p-[6px] bg-gradient-to-b from-white/40 to-white/10 shadow-2xl backdrop-blur-xl">

      {/* Inner Card */}
      <div className="w-full h-full rounded-[24px] overflow-hidden relative">

        {/* Background Image */}
        <img
          src="https://i.pinimg.com/736x/b6/3a/a0/b63aa0711e800eaf450de550b20860d7.jpg"
          alt="nature"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-green-700/80"></div>

        {/* Content */}
        <div className="relative z-10 p-5 flex flex-col justify-between h-full text-white">

          {/* Tag */}
          <span className="bg-white/80 text-black text-xs px-3 py-1 rounded-full w-fit">
            ✨ New-Instagram Reels Creator
          </span>

          {/* Text */}
          <div>
            <h2 className="text-2xl font-semibold leading-tight">
              Craft Your <br />
              <span className="italic font-light">Imaginary Escape</span>
            </h2>

            <p className="text-sm mt-2 text-white/90">
              The leading AI art generation and image editing tool with 3.5B+
              creations.
            </p>
          </div>

          {/* Button */}
          <button className="mt-4 bg-lime-400 hover:bg-lime-500 text-black font-semibold py-3 rounded-xl transition shadow-lg">
            Generate Image
          </button>
        </div>

      </div>
    </div>
  );
};

export default Card;