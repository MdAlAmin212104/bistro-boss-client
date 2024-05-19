


const FoodCard = ({item}) => {
      const {image, recipe, price, name } = item;
      const handleAddToCard = (item) => {
            console.log(item);
      }
      return (
            <div className="card bg-base-100 shadow-xl">
                  <figure><img src={image} alt="Shoes" /></figure>
                  <p className='bg-[#111827] text-white absolute right-0 mr-10 mt-4 py-1 px-2'>${price}</p>
                  <div className="card-body flex flex-col items-center">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <div className="card-actions justify-center">
                              <button 
                              onClick={() => handleAddToCard(item)}
                              className="btn btn-outline border-0 border-b-4 mt-4">Add to Card</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;