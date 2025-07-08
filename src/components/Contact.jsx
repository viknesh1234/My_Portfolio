import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import linkedin from '../assets/linkedin.png';
import Lottie from 'lottie-react';
import contact from '../assets/Contact.json';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_0mzqcye',           // ✅ Your Service ID
        'template_rq8fr2q',          // ✅ Your Template ID
        form.current,
        'h6jDjgYY_Fv6HBoSe'          // ✅ Your Public Key
      )
      .then(
        (result) => {
          alert('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('❌ EmailJS error:', error.text);
          alert('❌ Failed to send message. Please check console.');
        }
      );
  };

  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          {/* Left: Intro & Animation */}
          <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
            <p className='mb-4 text-white/85'>
              I'm always open to new opportunities and collaboration. Feel free to reach out!
            </p>
            <div className='flex space-x-4'>
              <a href='https://github.com/viknesh1234' target='_blank' rel='noreferrer'>
                <img src={facebook} alt='GitHub' className='h-6 w-6' />
              </a>
              <a href='https://leetcode.com/u/vikneshr1027/' target='_blank' rel='noreferrer'>
                <img src={instagram} alt='Leetcode' className='h-6 w-6' />
              </a>
              <a href='https://www.linkedin.com/in/vikneshr1027/' target='_blank' rel='noreferrer'>
                <img src={linkedin} alt='LinkedIn' className='h-6 w-6' />
              </a>
            </div>
            <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]' />
          </div>

          {/* Right: Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className='w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'
          >
            <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>

            <div className='mb-4'>
              <label htmlFor='name' className='block text-sm font-medium text-gray-700'>
                Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='Full Name'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700'>
                Email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Your Email'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm'
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='message' className='block text-sm font-medium text-gray-700'>
                Message
              </label>
              <textarea
                name='message'
                id='message'
                required
                placeholder='Write your message here...'
                className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm h-32 resize-none'
              />
            </div>

            <button
              type='submit'
              className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
