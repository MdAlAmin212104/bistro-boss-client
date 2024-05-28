import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
      const categories = ['salad', 'pizza', 'soup', 'dessert','drinks']
      const { category } = useParams()
      const initialIndex = categories.indexOf(category)
      const [tabIndex, setTabIndex] = useState(initialIndex);
      const [menu] = useMenu();
      const dessert = menu.filter(item => item.category === 'dessert');
      const pizza = menu.filter(item => item.category === 'pizza');
      const salad = menu.filter(item => item.category === 'salad');
      const soup = menu.filter(item => item.category === 'soup');
      const drinks = menu.filter(item => item.category === 'drinks');
      return (
            <div>
                  <Helmet>
                        <title>Bistro Boss || Order Food</title>
                  </Helmet>
                  <Cover
                        img={orderImg}
                        title='OUR SHOP'
                  />
                  <div className='my-6 text-center'>
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                              <TabList>
                                    <Tab>Salad</Tab>
                                    <Tab>Pizza</Tab>
                                    <Tab>Soups</Tab>
                                    <Tab>Dessert</Tab>
                                    <Tab>Drinks</Tab>
                              </TabList>
                              <TabPanel>
                                    <OrderTabs item={salad} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTabs item = {pizza} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTabs item={soup} />
                              </TabPanel>
                              <TabPanel>
                                    <OrderTabs item = {dessert}/>
                              </TabPanel>
                              <TabPanel>
                                    <OrderTabs item = {drinks}/>
                              </TabPanel>
                        </Tabs>
                  </div>
            </div>
      );
};

export default Order;