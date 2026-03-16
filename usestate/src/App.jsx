import { useState } from "react"
import AddUser from "./Components/AddUser"


function App() {

    // const [Number, setNumber] = useState(0);
    // ///usesatet no use : variablble karava 
    // // number ==> read only value ( no chnage no thaai)
    // //  setnumber ==> write only value ( number ni valur chnage karishu,)

    // console.log(Number)
    // function IncreaseNum() {
    //     setNumber(Number + 1);
    // }
    // function DecreaseNum() {

    //     if (Number !== 0) return setNumber(Number - 1);
    // }
    // // selft task :- 
    // // number not be minnesed  .
    // // jump = 5 value incress to 5 number .

    // function Jumpincrease() {
    //     setNumber(Number + 5);

    // }
    // // decrease jumm 5 ==> decrease valuse to 5 number .
    // function Jumpdecrease() {
    //     if (Number !== 0) return setNumber(Number - 5);
    // }
    // // create a Reset button valuse .
    // function Reset() {
    //     setNumber(0);
    // }


//-----------------------------------------------------------------------------------------------------------------------





    return (
        <>
            {/* <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex flex-col items-center justify-center">

                <h1 className="text-4xl text-center font-extrabold mb-4 tracking-wide">
                    useState = Change value of variable
                </h1>

                <p className="text-2xl text-gray-300 font-semibold mb-8">
                    Increase & Decrease Counter
                </p>

                <div className="w-[320px] h-[220px] bg-[#1e1e1e] rounded-2xl shadow-2xl flex items-center justify-center text-[120px] font-extrabold text-amber-400 border border-gray-700">
                    {Number}
                </div>

            
                <div className="flex flex-wrap justify-center gap-5 mt-10 max-w-[900px]">

                    <button
                        className="px-6 py-3 text-xl font-semibold rounded-xl bg-green-500 hover:bg-green-600 active:scale-95 transition shadow-lg"
                        onClick={IncreaseNum}
                    >
                        Increase
                    </button>

                    <button
                        className="px-6 py-3 text-xl font-semibold rounded-xl bg-red-500 hover:bg-red-600 active:scale-95 transition shadow-lg"
                        onClick={DecreaseNum}
                    >
                        Decrease
                    </button>

                    <button
                        className="px-6 py-3 text-xl font-semibold rounded-xl bg-blue-500 hover:bg-blue-600 active:scale-95 transition shadow-lg"
                        onClick={Jumpincrease}
                    >
                        +5 Jump
                    </button>

                    <button
                        className="px-6 py-3 text-xl font-semibold rounded-xl bg-purple-500 hover:bg-purple-600 active:scale-95 transition shadow-lg"
                        onClick={Jumpdecrease}
                    >
                        -5 Jump
                    </button>

                    <button
                        className="px-6 py-3 text-xl font-semibold rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black active:scale-95 transition shadow-lg"
                        onClick={Reset}
                    >
                        Reset
                    </button>

                </div>

            </section> */}

            <AddUser/>
        </>
    )
}

export default App
