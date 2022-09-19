import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import Reactlogo from '../assets/react.png'
import Github from '../assets/github.png'
import Bootstrap from '../assets/bootstrap.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className=' w-full h-screen bg-[#354259] text-gray-300'>
        {/* container */}
      <div className=' max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className=' text-4xl font-bold inline border-b-4 border-[#B2A4FF] '>Skills</p>
            <p className=' py-4'>// These are the technologies i've worked with</p>
        </div>
        <div className=' w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-3'>HTML</p>
            </div>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-3'>CSS</p>
            </div>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={JS} alt="JS icon" />
                <p className='my-3'>Javascript</p>
            </div>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Reactlogo} alt="React icon" />
                <p className='my-3'>React</p>
            </div>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                <p className='my-3'>Bootstrap</p>
            </div>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                <p className='my-3'>Tailwind</p>
            </div>
            <div className=' shadow-md shadow-[#16213E] hover:scale-110 duration-500'>
                <img className=' w-20 mx-auto' src={Github} alt="Github icon" />
                <p className='my-3'>GitHub</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
