
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import useMenu from '../../../hooks/useMenu';

const PopularMenu = () => {
      const [menu] = useMenu()
      const popularItem = menu.filter(item => item.category === 'popular')
      return (
            <section>
                  <SectionTitle
                        heading='FROM OUR MENU'
                        subHeading='Popular Menu'
                  />
                  <div className='grid md:grid-cols-2 gap-6'>
                        {
                              popularItem.map(item => <MenuItem
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