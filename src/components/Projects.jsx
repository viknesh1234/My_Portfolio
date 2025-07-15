import React from 'react'
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import SupplyChain from '../assets/SupplyChain.png'
import Youtube from '../assets/Youtube.png'
import Webelite from '../assets/Webelite.png'
import Cards from './Cards'


const Projects = () => {

  const projectJson = [
    {
      title: 'E-Commerce Website',
      desc: 'A full-stack application demonstrating effective integration of front-end and back-end technologies.',
      image: Portfolio,
      live: "https://ecommerce-ca37.onrender.com/home",
      github: "https://github.com/viknesh1234/Springboot-ecommerce"
    },
    {
      title: 'SmartChain Pro',
      desc: 'A well-designed application demonstrating practical use of modern technologies to solve real-world problems efficiently',
      image: SupplyChain,
      live: "#",
      github: "https://github.com/viknesh1234/smart-supply-chain-pro"
    },
    {
      title: 'Transcoder',
      desc: 'A well-designed application demonstrating practical use of modern technologies to solve real-world problems efficiently',
      image: SpicyBites,
      live: "#",
      github: "https://github.com/viknesh1234/Transcoder"
    },
    {
      title: 'Smart Car',
      desc: 'A practical project highlighting hands-on experience with current programming languages and frameworks.',
      image: Youtube,
      live: "#",
      github: "#"
    },
    {
      title: 'Irrigation System',
      desc: 'A practical implementation of modern programming techniques to solve real-world problems.',
      image: Webelite,
      live: "#",
      github: "https://github.com/viknesh1234/Irrigation-System"
    },

  ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
          {projectJson.map((items) => {
            return <Cards item={items} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
