import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
      return (
            <div className='text-center md:w-1/3 mx-auto'>
                  <p className='text-xl text-[#D99904] uppercase mt-4'>---{subHeading}---</p>
                  <h3 className='text-4xl border-y-4 m-4 py-2 up'>{heading}</h3>
            </div>
      );
};

export default SectionTitle;