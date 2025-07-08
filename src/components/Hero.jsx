import React from 'react';
import hero from '../assets/Hero.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import reduxLogo from '../assets/Redux.png';
import tailwind from '../assets/Tailwind Css.png';
import Express from '../assets/Express.png';
import ReactLogo from '../assets/React.png';
import NodeLogo from '../assets/NodeLogo.png';
import NextJs from '../assets/NextJs.png';

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between'>

          {/* Text Section */}
          <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
            <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>
              Hi There, <br /> I'm Viknesh
            </h1>
            <p className='md:text-2xl text-xl mb-4'>Java Full Stack Developer</p>
            <p className='mb-4'>
              Building robust full-stack web applications with Java, Spring Boot, PostgreSQL, and React blending powerful backend logic with modern, responsive frontend designs.
            </p>
            <button className='bg-black text-white px-3 py-2 w-max rounded-md'>
              <a
                href="https://drive.google.com/file/d/1lmR77-CXCILQw7JfXnkELLkQFetwUp0A/view?usp=drivesdk"
                download
                target='_blank'
                rel='noopener noreferrer'
              >
                Download Resume
              </a>
            </button>
          </div>

          {/* Hero Image Section with Circle + Hover Glow */}
          <div className='md:w-1/2 relative flex justify-center items-end'>
            <div className='w-90 h-90 lg:w-72 lg:h-125 rounded-full overflow-hidden shadow-md hover:shadow-2x2 hover:ring-4 hover:ring-red-500 transition-all duration-500 ease-in-out'>
              <img
                src={hero}
                alt="hero"
                className='w-full h-full object-cover'
              />
            </div>

            {/* Tech Logos - Only on small screens */}
            <img src={reduxLogo} alt="Redux" className='absolute w-10 top-36 left-0 rounded-full md:hidden' />
            <img src={NextJs} alt="Node" className='absolute w-10 top-0 right-5 md:hidden' />
            <img src={Express} alt="Express" className='absolute w-10 rounded-full right-0 bottom-40 md:hidden' />
             <img src={ReactLogo} alt="Redux" className='absolute w-10 top-30 left-0 rounded-full md:hidden' />
          </div>
        </div>
      </div>

      {/* Social Icons (Desktop Only) */}
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
        <img src={facebook} alt="Facebook" className='w-20' />
        <img src={instagram} alt="Instagram" className='w-20' />
        <img src={twitter} alt="Twitter" className='w-20' />
        <img src={linkedin} alt="LinkedIn" className='w-20' />
      </div>
    </section>
  );
};

export default Hero;
