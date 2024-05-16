import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';

const PopularMenu = () => {
      const [menu, setMenu] = useState([])
      useEffect(() => {
            fetch('menu.json')
                  .then(res => res.json())
                  .then(data => {
                        const popularItem = data.filter(item => item.category === 'popular')
                        setMenu(popularItem);
                  })
      }, [])
      return (
            <section>
                  <SectionTitle
                        heading='FROM OUR MENU'
                        subHeading='Popular Menu'
                  />
                  <div className='grid md:grid-cols-2 gap-6'>
                        {
                              menu.map(item => <MenuItem
                                    key={item._id}
                                    item={item}
                              />)
                        }
                  </div>
                  <div className='text-center mt-4'>
                        <button className='btn btn-outline border-0 border-b-4 mt-4'>View Full Menu</button>
                  </div>
            </section>
      );
};

export default PopularMenu;