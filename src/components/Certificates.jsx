import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

// import certificate images
import CodeTech from "../assets/CodeTech.png";
import Google from "../assets/Google.png";
import Java from "../assets/Java.png";
import Cloud from "../assets/Cloud.png";
import Secondprice from "../assets/Secondprice.png";
import Internship from "../assets/Internship.png";
import Ksr from "../assets/Ksr.png";
import Iee from "../assets/Iee.png";
import SriShti from "../assets/SriShti.png";
import Online from "../assets/Online.png";

const Certificates = () => {

    const certificates = [
        { title: "Programming in Java", institution: "NPTEL", type: "Offline Exam", image: Java },
        { title: "Cloud Computing", institution: "NPTEL", type: "Offline Exam", image: Cloud },
        { title: "Internship", institution: "CodeTech Technology", type: "Course", image: CodeTech },
        { title: "Internship", institution: "Zen1 Tech Park", type: "Course", image: Internship },
        { title: "Presentation", institution: "Mahendra Engineering College", type: "Event", image: Secondprice },
        { title: "Hackathon", institution: "SNS College Coimbatore", type: "Event", image: Google },
        { title: "Workshop", institution: "KSR IET College Tiruchengode", type: "Event", image: Ksr },
        { title: "International Webinar", institution: "Study World College Coimbatore", type: "Event", image: Iee },
        { title: "FSD Webinar", institution: "Code Purple", type: "Event", image: Online },
        { title: "Symposium", institution: "PSG College Coimbatore", type: "Event", image: SriShti },
    ];

    return (
        <div id='certificates' className='py-10 bg-gray-100 relative'>
            <h1 className='text-center text-3xl lg:text-5xl font-extrabold mb-4 text-red-500'>My Certificates</h1>
            <h2 className='text-center text-2xl lg:text-4xl font-bold mb-8'>Achievements & Events</h2>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {certificates.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col items-center p-6 hover:scale-105 transition-transform duration-300 ease-in-out'>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-32 h-32 object-contain mb-4 rounded"
                                />
                                <h3 className='font-semibold text-red-500 text-lg mb-1 text-center'>{item.title}</h3>
                                <p className='text-sm italic text-center text-gray-700 mb-1'>{item.institution}</p>
                                <p className='text-sm text-gray-600 text-center mb-4'>{item.type}</p>
                                
                                {/* Visit Certificate Button */}
                                <a
                                    href={item.image}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='mt-auto px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300'
                                >
                                    Visit Certificate
                                </a>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>
                </Swiper>
            </div>
        </div>
    );
};

export default Certificates;
