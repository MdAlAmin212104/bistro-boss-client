import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuItem from '../../../assets/menu/banner3.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'

const Menu = () => {
      const [menu] = useMenu();
      const dessert = menu.filter(item => item.category === 'dessert');
      const pizza = menu.filter(item => item.category === 'pizza');
      const salad = menu.filter(item => item.category === 'salad');
      const soup = menu.filter(item => item.category === 'soup');
      const offered = menu.filter(item => item.category === 'offered');

      return (
            <div>
                  <Helmet>
                       <title> Bistro Boss || Menu</title>
                  </Helmet>
                  <Cover img={menuItem} title='OUR MENU' />
                  {/* main cover */}
                  <SectionTitle
                        subHeading="Don't miss"
                        heading="TODAY'S OFFER"
                  />
                  {/* offer menu items */}
                  <MenuCategory item={offered} />
                  {/* dessert menu items */}
                  <MenuCategory
                        item={dessert}
                        title='dessert'
                        coverImg={dessertImg}
                  />
                  {/* pizza menu items */}
                  <MenuCategory
                        item={pizza}
                        title='pizza'
                        coverImg={pizzaImg}
                  />
                  {/* salad menu items */}
                  <MenuCategory
                        item={salad}
                        title='salad'
                        coverImg={saladImg}
                  />
                  {/* soup menu items */}
                  <MenuCategory
                        item={soup}
                        title='soup'
                        coverImg={soupImg}
                  />
            </div>
      );
};

export default Menu;