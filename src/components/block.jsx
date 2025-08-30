import React from 'react'

const block = ({icon,text}) => {
  return (
    <div className="flex flex-col justify-center items-center  p-5 h-50 w-50 rounded-lg bg-gray-300 shadow-lg hover:scale-105 transition-transform duration-300">
        <div className="h-30 w-30">
            <img src={icon} alt="icon" className=""/>
        </div>

        <div className="p-5 font-oswald text-center">
            {text}
        </div>
    </div>
  )
}

export default block
