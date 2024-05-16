import React from 'react';

const FoodCard = ({item}) => {
      const {image, recipe, price, name } = item;
      return (
            <div className="card bg-base-100 shadow-xl">
                  <figure><img src={image} alt="Shoes" /></figure>
                  <p className='bg-[#111827] text-white absolute right-0 mr-10 mt-4 py-1 px-2'>${price}</p>
                  <div className="card-body text-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                              <button className="btn btn-primary">Add to Card</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;