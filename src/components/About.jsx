import React from 'react';
import Html from '../assets/Html.png';
import Css from '../assets/CSS.png';
import Javascript from '../assets/JS.png';
import ReactLogo from '../assets/React.png';
import ReduxLogo from '../assets/Redux.png';
import Tailwind from '../assets/Tailwind Css.png';
import Bootstrap from '../assets/Bootstrap.png';
import NodeLogo from '../assets/NodeLogo.png';
import Express from '../assets/Express.png';
import NextJs from '../assets/NextJs.png';

const About = () => {
  return (
    <div className='relative' id='about'>
      <div className='bg-gray-100 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-base text-red-600 font-semibold tracking-wide uppercase'>About Me</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>Hi, Viknesh</p>
            <p className='mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto'>
              A Full Stack Developer specializing in Java (Spring Boot) & modern frontend technologies.
            </p>
          </div>

          <div className='mt-10'>
            <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
              {/* Left Section */}
              <div>
                <h3 className='text-2xl font-semibold text-gray-900'>My Journey</h3>
                <p className='mt-4 text-lg text-gray-600'>
                  Hi! I'm Viknesh, a passionate Java Full Stack Developer skilled in building robust, scalable web applications. I specialize in Java, Spring Boot, PostgreSQL, MySQL, HTML, CSS, JavaScript, ReactJS, and Tailwind CSS.
                </p>
                <p className='mt-4 text-lg text-gray-600'>
                  With hands-on experience across both frontend and backend development, I create seamless, user-friendly systems backed by efficient and secure server-side logic.
                </p>
                <p className='mt-4 text-lg text-gray-600'>
                  I bring a strong problem-solving mindset and a continuous drive to learn and evolve with new technologies.
                </p>
              </div>

              {/* Skills Section */}
              <div className='border border-red-200 rounded-lg md:p-7 py-7 flex flex-col gap-8 items-center shadow-lg shadow-red-300'>
                <h3 className='text-2xl font-semibold text-red-600'>Skills & Expertise</h3>
                <div className='flex items-center justify-center flex-wrap gap-3'>
                  {/* Skill Card Format */}
                  {[
                    { name: "HTML", img: Html, percent: "90%" },
                    { name: "CSS", img: Css, percent: "90%" },
                    { name: "JavaScript", img: Javascript, percent: "80%" },
                    { name: "React", img: ReactLogo, percent: "75%" },
                    { name: "Tailwind Css", img: Tailwind, percent: "85%" },
                    { name: "Java", img: ReduxLogo, percent: "90%" },
                    { name: "SpringBoot", img: Express, percent: "80%" },
                    { name: "Postgre sql", img: NextJs, percent: "85%" },
                    { name: "My sql", img: NodeLogo, percent: "80%" },
                    { name: "Bootstrap", img: Bootstrap, percent: "85%" },
                  ].map((skill, index) => (
                    <div key={index} className='group relative border border-red-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-red-300'>
                      <img src={skill.img} alt={skill.name} className='w-8' />
                      <span className='font-semibold'>{skill.name}</span>
                      <span className='absolute -top-7 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-300'>
                        {skill.percent}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More About Me */}
          <div className='mt-12'>
            <h3 className='text-2xl font-semibold text-gray-900'>More About Me</h3>
            <p className='mt-4 text-lg text-gray-600'>
              I am a college student with a strong interest in full-stack web development and emerging technologies. Apart from coding, I am passionate about learning new tools and frameworks, and I consistently keep myself updated with the latest trends. I enjoy working with Java, Spring Boot, PostgreSQL, Git, and GitHub.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
