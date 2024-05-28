import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutFrom = () => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const [cart] = useCart();
  const totalPrice =cart.reduce((sum, item) => sum + item.price, 0);

  useEffect(()=> {
    if(totalPrice > 0){
      axiosSecure.post('/create_payment_intent', {price: totalPrice})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
    }
  },[axiosSecure, totalPrice])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError('');
    }


    // confirm payment system
    const { paymentIntent, error : confirmError} = await stripe.confirmCardPayment(clientSecret,{
      payment_method : {
        card : card,
        billing_details : {
          email : user?.email || 'anonymous',
          name : user?.displayName || 'anonymous',
        }

      }
    })

    if(confirmError){
      console.log('confirmation error');
    }else{
      console.log('paymentIntent intent', paymentIntent);
    }

    if(paymentIntent.status == 'succeeded'){
      console.log('transaction id', paymentIntent.id);
      setTransactionId(paymentIntent.id);

      // save payment information to database
      const payment = {
        email : user?.email,
        price : totalPrice,
        transactionId : paymentIntent.id,
        date : new Date(), // utc data convert. use moment.js 
        cartIds : cart.map(item => (item._id)),
        menuItemIds : cart.map(item => item.menuId),
        status : 'pending'
      }

      const res = await axiosSecure.post('/payment', payment)
      console.log(res.data);
      if(res.data?.paymentResult.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your payment was successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/paymentHistory')
      }


    }



  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-sm btn-primary my-4"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
    </form>
    <p className="text-red-500">{error}</p>
    {
      transactionId && <p className="text-green-500">Transaction Id : {transactionId}</p>
    }
    </div>
  );
};

export default CheckoutFrom;
