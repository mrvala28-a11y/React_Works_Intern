import React from "react";

const foods = [
  {
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    title: "Nasi Goreng",
    desc: "Nasi yang digoreng with ndog dadar",
    dark: true
  },
  {
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    title: "Ayam Geprek",
    desc: "Kentucky pedes with nasi",
    dark: false
  },
  {
    img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d",
    title: "Spaghetti",
    desc: "Mie with pasta kecap pedas",
    dark: true
  }
];

function FoodCard({ img, title, desc, dark }) {
  return (
    <div
      className={`relative w-[140px] rounded-[22px] shadow-xl p-4 pt-12 text-center transition hover:-translate-y-1
      ${dark ? "bg-slate-600 text-white" : "bg-white text-slate-700"}`}
    >
      <img
        src={img}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 object-cover rounded-full shadow-lg border-4 border-gray-200"
      />

      <h3 className="text-sm font-semibold mt-4">{title}</h3>

      <p className="text-[10px] opacity-80 mt-1">{desc}</p>

      <button
        className={`absolute bottom-3 right-3 w-7 h-7 rounded-full text-lg flex items-center justify-center shadow
        ${dark ? "bg-white text-slate-700" : "bg-slate-600 text-white"}`}
      >
        +
      </button>
    </div>
  );
}

function FoodLanding() {
  return (
    <div className="bg-black min-h-screen flex justify-center">

      {/* Center Card */}
      <div className="w-[380px] bg-[#e5e7eb] min-h-screen px-6 py-6">

        {/* Navbar */}
        <div className="flex items-center justify-between mb-8">

          <div className="text-2xl text-slate-600">🔖</div>

          <div className="flex gap-5 text-xs font-semibold text-slate-600">
            <span>HOME</span>
            <span>MENU</span>
            <span>ABOUT</span>
          </div>

          <img
            src="https://i.pravatar.cc/40"
            className="w-9 h-9 rounded-full border-2 border-white shadow"
          />
        </div>

        {/* Hero */}
        <div className="flex gap-4 items-center mb-10">

          <div>
            <h1 className="bg-white px-4 py-1 rounded-lg shadow text-sm font-bold text-slate-700 inline-block">
              Makanan Favorite
            </h1>

            <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">
              Makanan adalah segalanya bagi kita. tanpa makanan kita pun akan
              sulit buat mikir ide-ide kreatif makanya jangan lupa makan ya :V
            </p>

            <button className="mt-3 bg-slate-600 text-white text-xs px-3 py-1 rounded-md shadow">
              View More
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            className="w-28 h-28 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Food Cards */}
        <div className="flex justify-between mb-12">
          {foods.map((food, i) => (
            <FoodCard key={i} {...food} />
          ))}
        </div>

        {/* Padang Section */}
        <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center gap-4">

          <img
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
            className="w-20 h-20 rounded-full object-cover shadow"
          />

          <div>
            <h2 className="text-sm font-bold text-slate-700">
              Masakan Padang
            </h2>

            <p className="text-[11px] text-slate-600 mt-1 leading-relaxed">
              Ini nih...Masakan Padang, yaitu masakan yg berasal dari Sumatra
              Utara, selain rasanya yg enak ini juga harganya murah (≧▽≦)
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="text-center text-[11px] text-slate-500 mt-10">
          Created by zenajaa_
        </p>

      </div>

    </div>
  );
}

export default FoodLanding;