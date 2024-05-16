import React from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg'

const Featured = () => {
      return (
            <div className='p-8 my-10 bg-fixed rounded-3xl' style={{ backgroundImage: `url(${featuredImg})` }}>
                  <SectionTitle
                        heading='Featured Items'
                        subHeading='Check it out'
                  />
                  <div className='md:flex justify-center items-center py-24 md:px-16 gap-6 bg-slate-500 bg-opacity-20 rounded-3xl'>
                        <div>
                              <img src={featuredImg} alt="" className='' />
                        </div>
                        <div className='text-white'>
                              <p>March 20, 2023</p>
                              <p className='uppercase'>WHERE CAN I GET SOME?</p>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                              <button className='btn btn-outline border-0 border-b-4 mt-4'>Read More</button>
                        </div>
                  </div>
            </div>
      );
};

export default Featured;