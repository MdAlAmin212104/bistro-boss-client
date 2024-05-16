import React from 'react';
import FoodCard from '../../../Component/FoodCard/FoodCard';

const OrderTabs = ({item}) => {
      return (
            <div className='grid md:grid-cols-3 gap-4 mt-8'>
                  {
                        item.map(item => <FoodCard
                              key={item._id}
                              item={item}
                        />)
                  }
            </div>
      );
};

export default OrderTabs;