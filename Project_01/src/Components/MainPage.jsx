import React from "react";

function FoodCard({ img, title, desc }) {
  return (
    <div className="bg-slate-600 text-white w-36 sm:w-44 rounded-2xl shadow-xl p-3 relative">
      <img
        src={img}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto -mt-10 shadow-lg object-cover"
      />

      <h3 className="text-center font-semibold text-sm sm:text-base mt-2">
        {title}
      </h3>

      <p className="text-[10px] sm:text-xs text-center opacity-80">
        {desc}
      </p>

      <button className="absolute bottom-2 right-2 bg-white text-slate-700 w-6 h-6 sm:w-7 sm:h-7 rounded-full font-bold">
        +
      </button>
    </div>
  );
}

function MainPage() {
  return (
    <div className="bg-gray-300 min-h-screen flex items-center justify-center p-4">

      {/* Main Card */}
      <div className="bg-gray-200 w-full max-w-[900px] rounded-3xl shadow-2xl p-4 sm:p-8">

        {/* Navbar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg sm:text-xl">🔖</div>

          <ul className="flex gap-4 sm:gap-8 text-gray-600 font-semibold text-xs sm:text-sm">
            <li>HOME</li>
            <li>MENU</li>
            <li>ABOUT</li>
          </ul>

          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
          />
        </div>

        {/* Hero */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <div className="max-w-sm text-center sm:text-left">
            <h1 className="text-lg sm:text-2xl font-bold bg-white inline-block px-3 py-1 sm:px-4 sm:py-2 rounded-xl shadow">
              Makanan Favorite
            </h1>

            <p className="text-gray-600 mt-3 text-xs sm:text-sm">
              Makanan adalah segalanya bagi kita. tanpa makanan kita pun
              akan sulit buat mikir ide kreatif makanya jangan lupa makan ya :V
            </p>

            <button className="mt-3 bg-slate-600 text-white px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm rounded-lg shadow">
              View More
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Food Cards */}
        <div className="flex justify-center gap-4 sm:gap-10 mt-12 flex-wrap">

          <FoodCard
            img="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            title="Nasi Goreng"
            desc="Nasi yang digoreng with ndog dadar"
          />

          <FoodCard
            img="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            title="Ayam Geprek"
            desc="Kentucky pedes with nasi"
          />

          <FoodCard
            img="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            title="Spaghetti"
            desc="Mie with pasta kecap pedas"
          />

        </div>

        {/* Padang Section */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col sm:flex-row items-center p-4 sm:p-6 mt-10 gap-4">

          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
          />

          <div className="text-center sm:text-left">
            <h2 className="text-base sm:text-xl font-bold text-gray-700">
              Masakan Padang
            </h2>

            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Ini nih...Masakan Padang, yaitu masakan yg berasal dari
              Sumatra Utara, selain rasanya yg enak ini juga harganya murah.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-gray-500 text-xs sm:text-sm mt-6">
          Created by zenajaa_
        </p>

      </div>
    </div>
  );
}

export default MainPage;