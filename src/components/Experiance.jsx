import React from 'react'
import Html from "../assets/Html.jpg";
import Css from "../assets/Css.jpg";
import Tailwind from "../assets/Tailwind.jpg";
import Javascript from "../assets/JavaScript.jpg";
import Reactimg from "../assets/Reactimg.jpg";
import Node from "../assets/Node.jpg";
import Express from "../assets/Express.jpg";
import Mongo from "../assets/Mongo.jpg";
import Github from "../assets/Github.jpg"

function Experiance() {

    const cardItem=[
        {
            id:1,
            logo:Html,
            Name: "HTML"
        },
        {
            id:2,
            logo:Css,
            Name: "CSS"
        },
        {
            id:3,
            logo:Tailwind,
            Name:"Tailwind Css"
        },
        {
            id:4,
            logo:Javascript,
            Name:"Java Script"
        },
        {
            id:5,
            logo:Reactimg,
            Name:"React Js"
        },
        {
            id:6,
            logo:Node,
            Name:"Node Js"
        },
        {
            id:7,
            logo:Express,
            Name:"Express Js"
        },
        {
            id:8,
            logo:Mongo,
            Name:"Mongo DB"
        },
        {
            id:9,
            logo:Github,
            Name:"Git Github"
        }
    ]

  return (
   
    <div name="Experiance" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
    <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="font-semibold">I am fresher but I am using these technologies past 6 months.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
            {
                cardItem.map(({id,logo,Name})=>(
                    <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} className="w-[150px] p-1 rounded-full " alt="loading" />
                        <div>
                            <div>{Name}</div>
                        </div>
                       
                    </div>
                ))
            }
        </div>
    </div>
   </div>
  )
}

export default Experiance
