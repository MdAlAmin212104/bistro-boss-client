import React from 'react';
import MenuItem from './../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

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
                  <div className='flex justify-center'>
                        <Link to={`/order/${title}`}>
                              <button className='btn btn-outline border-0 border-b-4 mt-4'>ORDER YOUR FAVOURYITE FOOD</button>
                        </Link>
                  </div>
            </div>
      );
};

export default MenuCategory;