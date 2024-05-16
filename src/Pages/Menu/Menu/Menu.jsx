import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuItem from '../../../assets/menu/banner3.jpg'
import PopularMenu from '../../Home/PopularMenu/PopularMenu';

const Menu = () => {
      return (
            <div>
                  <Helmet>
                       <title> Bistro Boss || Menu</title>
                  </Helmet>
                  <Cover img={menuItem} title='OUR MENU' />
                  
            </div>
      );
};

export default Menu;