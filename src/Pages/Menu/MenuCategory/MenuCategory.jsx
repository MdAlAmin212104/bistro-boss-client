import React from 'react';
import MenuItem from './../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({item, title, coverImg}) => {
      return (
            <div className='pt-8'>
                  {title && <Cover img={coverImg} title={title} />}
                  <div className='grid md:grid-cols-2 gap-6 my-16'>
                        {
                              item.map(item => <MenuItem
                                    key={item._id}
                                    item={item}
                              />)
                        }
                  </div>
            </div>
      );
};

export default MenuCategory;