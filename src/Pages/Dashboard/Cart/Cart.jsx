import useCart from "../../../hooks/useCart";

const Cart = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  console.log(totalPrice);
  console.log(cart);
  return (
    <div>
      <div className="flex justify-evenly mt-8">
        <h2 className="text-5xl">Items : {cart.length}</h2>
        <h2 className="text-5xl">total Price : {totalPrice}</h2>
        <h2 className="text-2xl btn btn-primary">Pay</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                SL No
              </th>
              <th>image</th>
              <th>Name</th>
              <th>price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
                cart.map(item => <tr key={item._id}>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>{item.price}</td>
                    <th>
                      <button className="btn btn-ghost btn-xs">details</button>
                    </th>
                  </tr>)
            }
            {/* row 1 */}
            
            
            
          </tbody>
          
        </table>
      </div>
    </div>
  );
};

export default Cart;
