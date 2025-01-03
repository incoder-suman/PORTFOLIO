import React from 'react'

function About() {
  return (
    <div name="about" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>Hello, i am Suman kumar, a passionate Web developer with a keen eye for MERN Stack . I strive to create impactful and visually stunning Software solutions that leave a lasting impression.</p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Education & Training</h1>
        <span>
        [Graduate/B.sc Hons][Magadh university][2016-2019]
        [Full stack development][Dice Academy][2024]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Skills & Expertise</h1>
        <span>
       [ Frontend Development:]
          [HTML5,CSS3,Tailwind CSS,JavaScript (ES6+),React.js (with Hooks),Redux (for state management),React Router (for routing),Responsive Web Design][Backend Development][Node.js (with Express)] [Version Control & Collaboration:][Git/GitHub (for version control)] [Databases ][MongoDB (NoSQL)] [Expertise][Building responsive, user-friendly web applications.]
        </span>
        <br />
        <br />
        <h1 className="text-green-600 font-semibold text-xl">Mission Statement</h1>
        <p>
        My mission is to leverage my skills and creativity to deliver innovative [Your Field] solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
            </p>        
        </div>
    </div>
  )
}

export default About
