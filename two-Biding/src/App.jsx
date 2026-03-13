import React, { useState } from 'react'

const App = () => {


const [username, setUsername] = useState('')
const [Password, setPassword] = useState('')

// console.log(username,Password);

function submit(){
    console.log("Login sucessfully my bro 🤣")
    const data = {username, Password };
    console.log(data);
    setUsername('');
    setPassword('');
}










  return (
    <>
      <h1 className="text-center mt-10 font-bold text-5xl">
        Two Way Binding : Login / Signup
      </h1>

      <section className="flex items-center justify-center mt-16">
        <form className=" p-10 rounded-xl shadow-xl flex flex-col gap-6 w-[350px]" onSubmit={(e)=>{
            e.preventDefault();
            submit();
        }}  >

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e)=> {
                // console.log(e.target.value);
                setUsername(e.target.value);
            }}
            className="px-4 py-3 rounded-lg outline-none border border-gray-600 bg-gray-900 text-white focus:border-blue-500"
          />  

          <input
            type="password"
            placeholder="Enter Password"
            value={Password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="px-4 py-3 rounded-lg outline-none border border-gray-600 bg-gray-900 text-white focus:border-blue-500"
          />

          <input
            type="submit"
            value="Login"
            className="py-3 rounded-lg bg-blue-500 text-white font-semibold cursor-pointer hover:bg-yellow-400 active:scale-95 transition"
          />

        </form>
      </section>
    </>
  )
}

export default App
