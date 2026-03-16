import React, { useState } from "react";

const AddUser = () => {

  const allUsers = [
    { name: "Aarav Patel", email: "aaravpatel@gmail.com" },
    { name: "Riya Sharma", email: "riyasharma@gmail.com" },
    { name: "Vivaan Mehta", email: "vivaanmehta@gmail.com" },
    { name: "Ananya Gupta", email: "anayagupta@gmail.com" },
    { name: "Arjun Singh", email: "arjunsingh@gmail.com" },
    { name: "Diya Shah", email: "diyashah@gmail.com" },
    { name: "Kabir Verma", email: "kabirverma@gmail.com" },
    { name: "Isha Desai", email: "ishadesai@gmail.com" },
    { name: "Aditya Nair", email: "adityanair@gmail.com" },
    { name: "Sneha Kapoor", email: "snehakapoor@gmail.com" },
  ];

  const [data, setData] = useState(allUsers.slice(0, 3));

  function addOneUser() {
    if (data.length >= allUsers.length) return;

    setData([...data, allUsers[data.length]]);
  }

  function addTwoUsers() {
    if (data.length >= allUsers.length) return;

    const nextUsers = allUsers.slice(data.length, data.length + 2);
    setData([...data, ...nextUsers]);
  }

  return (
    <>
      <section className="flex flex-wrap items-center justify-center min-h-screen bg-black p-8 gap-6">

        {data.map((user, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl w-[250px]"
          >
            <div className="px-6 py-2 bg-zinc-800 border border-zinc-600 rounded-lg shadow-inner">
              <h1 className="text-xl font-bold text-white text-center">
                {user.name}
              </h1>
            </div>

            <div className="px-6 py-2 bg-zinc-800 border border-zinc-600 rounded-lg shadow-inner">
              <h2 className="text-lg font-semibold text-white text-center">
                {user.email}
              </h2>
            </div>
          </div>
        ))}

        <div className="w-full flex justify-center gap-4 mt-4">
          <button
            className="bg-orange-400 py-2 px-6 rounded-lg font-semibold"
            onClick={addOneUser}
          >
            Add One User
          </button>

          <button
            className="bg-amber-600 py-2 px-6 rounded-lg font-semibold"
            onClick={addTwoUsers}
          >
            Add Two Users
          </button>
        </div>

      </section>
    </>
  );
};

export default AddUser;