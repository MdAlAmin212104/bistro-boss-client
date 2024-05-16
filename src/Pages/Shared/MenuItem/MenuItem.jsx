import React from 'react';

const MenuItem = ({ item }) => {
      const {image, recipe, price, name } = item;
      return (
            <div className='space-x-2'>
                  <img style={{borderRadius:'0 200px 200px 200px'}} src={image} className='w-[120px] h-[100px]' alt="" />
                  <div className='flex justify-between'>
                        <p className='uppercase'>{name}----------</p>
                        <p className='text-[#BB8506]'>{price}</p>
                  </div>
                  <p>{recipe}</p>
            </div>
      );
};

export default MenuItem;