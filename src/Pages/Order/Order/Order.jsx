import { useState } from 'react';
import orderImg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Order = () => {
      const [tabIndex, setTabIndex] = useState(0);
      return (
            <div>
                  <Cover
                        img={orderImg}
                        title='OUR SHOP'
                  />
                  <div className='my-6 text-center'>
                        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                              <TabList className='border-0'>
                                    <Tab className="">Salad</Tab>
                                    <Tab>pizza</Tab>
                                    <Tab>soups</Tab>
                                    <Tab>desserts</Tab>
                                    <Tab>drinks</Tab>
                              </TabList>
                              <TabPanel></TabPanel>
                              <TabPanel></TabPanel>
                              <TabPanel></TabPanel>
                              <TabPanel></TabPanel>
                              <TabPanel></TabPanel>
                        </Tabs>
                  </div>
            </div>
      );
};

export default Order;