import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import Category from './../Category/Category';
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
                        subHeading='Check it out'
                  />
                  <div className='grid md:grid-cols-2 gap-6'>
                        {
                              menu.map(item => <MenuItem
                                    key={item._id}
                                    item={item}
                              />)
                        }
                  </div>
            </section>
      );
};

export default PopularMenu;