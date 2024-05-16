import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../../../assets/home/slide1.jpg'
import banner2 from '../../../assets/home/slide2.jpg'
import banner3 from '../../../assets/home/slide3.jpg'
import banner4 from '../../../assets/home/slide4.jpg'
import banner5 from '../../../assets/home/slide5.jpg'


import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';
import { Pagination } from 'swiper/modules';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

const Category = () => {
      return (
            <div>
                  <SectionTitle
                        heading='ORDER ONLINE'
                        subHeading='From 11:00am to 10:00pm'
                  />
                  <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={{
                              clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper mb-24"
                  >
                        <SwiperSlide>
                              <img src={banner1} alt="" />
                              <p className='text-4xl text-center uppercase text-white -mt-24'>salads</p>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={banner2} alt="" />
                              <p className='text-4xl text-center uppercase text-white -mt-24'>Soups</p>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={banner3} alt="" />
                              <p className='text-4xl text-center uppercase text-white -mt-24'>pizzas</p>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={banner4} alt="" />
                              <p className='text-4xl text-center uppercase text-white -mt-24'>pizzas</p>
                        </SwiperSlide>
                        <SwiperSlide>
                              <img src={banner5} alt="" />
                              <p className='text-4xl text-center uppercase text-white '>salads</p>
                        </SwiperSlide>
                        
                  </Swiper>
            </div>
      );
};

export default Category;