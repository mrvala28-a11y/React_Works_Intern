import React from "react";

const GreenCard = () => {
    return (
        <div className="w-[280px] p-4 rounded-[28px] bg-lime-500 shadow-xl">

            <div className="bg-white rounded-[20px] overflow-hidden">
                <img
                    src="https://i.pinimg.com/736x/b6/3a/a0/b63aa0711e800eaf450de550b20860d7.jpg" className="w-full h-[180px] object-cover"
                />
            </div>

            <div className="mt-4 text-white">
                <span className="bg-white text-black text-xs px-3 py-1 rounded-full">
                    ✨ New-Instagram Reels Creator
                </span>

                <h2 className="text-2xl font-semibold mt-3">
                    Craft Your
                    <span className="italic block font-light">Imaginary Escape</span>
                </h2>

                <p className="text-xs mt-2">
                    The leading AI art generation and image editing tool with 3.5B+
                    creations.
                </p>

                <button className="mt-4 w-full bg-lime-200 text-black py-2 rounded-full font-medium shadow-md hover:scale-105 transition">
                    Generate Image
                </button>
            </div>

        </div>
    );
};

export default GreenCard;