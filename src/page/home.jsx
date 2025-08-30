import React from 'react'
import Homelogo from '../assets/job-hunt.svg';
import Blocklogo1 from '../assets/revenue.svg';
import Blocklogo2 from '../assets/winners.svg';
import Blocklogo3 from '../assets/artificial-intelligence.svg';
import Blocklogo4 from '../assets/marketing.svg';
import Block from '../components/block.jsx';
const Home = () => {
  return (
    <div className="flex flex-col items-center h-full w-full bg-gray-200 lg:flex-row  lg:h-screen">
      <div className="p-10 rounded-lg flex flex-col justify-center items-center shadow-lg lg:w-full lg:h-full">
        <div className="font-oswald font-medium text-2xl text-center pt-10 lg: text-3xl">We are building a new model for recruitment</div>
        <div className="pt-10 flex flex-col gap-5 md:grid md:grid-cols-2 md:gap-5">
          <Block icon={Blocklogo1} text="Revenue Sharing"/>
          <Block icon={Blocklogo2} text="Competitive Broker Community"/>
          <Block icon={Blocklogo3} text="AI-driven Learning"/>
          <Block icon={Blocklogo4} text="Marketing Engine"/>
        </div>
      </div>

      <div className="p-10 rounded-lg flex flex-col justify-center items-center w-full h-full shadow-lg lg:w-full lg:h-full">
      <div className="font-oswald text-center text-2xl font-medium lg: text-3xl"> Recruiting Without Limits </div>
        <div className="font-oswald text-center text-medium lg:text-xl ">Speed & Scale</div>
        <img src={Homelogo} alt="Home Logo" className="h-96 w-96 shadow-lg  p-5 rounded-lg bg-gray-300 hover:scale-105 transition-transform duration-300 lg:mt-10 "/>
      </div>
    </div>
  )
}

export default Home;
