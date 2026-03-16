import React, { useState } from "react";

const NoteApp = () => {

  const [Heading, setHeading] = useState('')
  const [Notes, setNotes] = useState('')
  const [Task, setTask] = useState([]);  

  function Submitform(){

    let card =[...Task];
    card.push({Title:Heading,Topics:Notes});
    setTask(card);

    setHeading("");
    setNotes("");
  }
  
  return (
    <>
      <section className="lg:flex items-center justify-center">

        {/* Add task */}
        <div className="lg:w-1/2 h-screen flex items-center justify-center ">
          
          <form
            className="bg-[#222] text-amber-300 font-bold rounded-xl p-6 shadow-xl"
            onSubmit={(e) =>{
              e.preventDefault();
              Submitform();
            }}
          >

            <h1 className="text-center text-3xl text-amber-400 font-bold mb-4">
              Create Your Notes
            </h1>

            <input
              type="text"
              className="bg-[#555] px-4 py-2 outline-none text-white block my-4 w-96 focus:ring-2 focus:ring-amber-600 rounded"
              placeholder="Heading"
              value={Heading}
              onChange={(e) => {
                setHeading(e.target.value);
              }}
            />

            <textarea
              rows="6"
              className="bg-[#555] px-4 py-4 outline-none text-white block my-4 w-96 focus:ring-2 focus:ring-amber-600 rounded"
              placeholder="Topics"
              value={Notes}
              onChange={(e) => {
                setNotes(e.target.value);
              }}
            ></textarea>

            <input
              type="submit"
              value="Create Note"
              className="w-96 px-4 py-2 bg-orange-500 hover:bg-orange-600 active:scale-95 text-black font-bold rounded-md cursor-pointer"
            />

          </form>
        </div>


        {/* Notes Display */}
        <div className="lg:w-1/2 h-screen max-lg:border-t-2 lg:border-l-2 border-dashed border-black bg-gray-100 p-10 flex flex-wrap gap-8 justify-start items-start">

          {Task.map((item,index)=>(
            
            <div key={index} className="relative w-72 h-72 bg-white shadow-2xl rounded-2xl flex items-center justify-center border border-orange-400">

              {/* Pin */}
              <img
                src="./pin.jpeg"
                alt="pin"
                className="w-10 h-10 absolute -top-3 left-1/2 -translate-x-1/2 rotate-45 drop-shadow-lg"
              />

              {/* Note Card */}
              <div className="bg-orange-200 rounded-2xl w-60 h-56 p-4 text-center overflow-auto">

                <h2 className="text-xl font-bold text-orange-700 mb-2">
                  {item.Title}
                </h2>

                <p className="text-gray-700 text-sm">
                  {item.Topics}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
};

export default NoteApp;