import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
      const [reviews, setReviews] = useState([])
      useEffect(() => {
            fetch('reviews.json')
                  .then(res => res.json())
                  .then(data => {
                        setReviews(data);
                  })
      },[])
      return (
            <section>
                  <SectionTitle
                        subHeading='What Our Clients Say'
                        heading='TESTIMONIALS'
                  />
                  <div>
                        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                              
                              {
                                    reviews.map(review => <SwiperSlide
                                          key={review._id}
                                    >
                                          
                                          <div className='m-24 flex flex-col items-center '>
                                                <Rating
                                                style={{ maxWidth: 180 }}
                                                value={review.rating}
                                                readOnly
                                          />
                                                <p className='my-10'>{review.details}</p>
                                                <h3 className='text-[#CD9003] font-medium text-3xl'>{review.name}</h3>
                                          </div>

                                    </SwiperSlide>)
                              }
                        </Swiper>
                  </div>
                  
            </section>
      );
};

export default Testimonials;