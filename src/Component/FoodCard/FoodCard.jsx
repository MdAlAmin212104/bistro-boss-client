
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";




const FoodCard = ({item}) => {
      const {user} = useAuth()
      const navigate = useNavigate()
      const {_id, image, recipe, price, name } = item;
      const location = useLocation()
      const axiosSecure = useAxiosSecure()
      const [, refetch]= useCart()

      const handleAddToCard = () => {
            if(user && user.email){
                  //console.log(user.email, item);
                  const cartItem = {
                        menuId : _id,
                        email : user.email,
                        name,
                        image,
                        price,

                  }
                  axiosSecure.post('/carts', cartItem)
                        .then(res => {
                              console.log(res.data);
                              if(res.data.insertedId){
                                    Swal.fire({
                                          position: "top-end",
                                          icon: "success",
                                          title: `${name} added to the cart`,
                                          showConfirmButton: false,
                                          timer: 1500
                                    });
                              }
                              refetch()
                        })
            }
            else{
                  Swal.fire({
                        title: "Your are not login",
                        text: "Please login to add to cart?",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, login!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          navigate('/login', {state: {from : location}})
                        }
                  });
            }
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
                              onClick={handleAddToCard}
                              className="btn btn-outline border-0 border-b-4 mt-4">Add to Card</button>
                        </div>
                  </div>
            </div>
      );
};

export default FoodCard;