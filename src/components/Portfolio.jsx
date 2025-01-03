import React from 'react'
import colorCode from "../assets/colorCode.jpg";
import qrcode from "../assets/qrcode.jpg";
import mthcabs from "../assets/mthcabs.jpg"

function Portfolio() {
    const cardItem=[
        {
            id:1,
            logo:colorCode,
            Name: "color code generator"
        },
        {
            id:2,
            logo:qrcode,
            Name: "Qr code generator"
        },
        {
            id:3,
            logo:mthcabs,
            Name:"Car reantal"
        }
    ]


  return (
   <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
    <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
            {
                cardItem.map(({id,logo,Name})=>(
                    <div className="md:w-[300px] md:h-[300] border-[2px] rounded-lg shadow-xl p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="loading" />
                        <div>
                            <div className="px-2 font-bold text-xl mb-2">{Name}</div>
                            <p className="px-2 text-gray-700">These projects are created by me.</p>
                        </div>
                        <div className="px-4 py-4 space-x-1 justify-around">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Click Here</button>
                            <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source code</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
   </div>
  )
}

export default Portfolio
