import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutFrom from "./CheckoutFrom";

// todo : add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)

const Payment = () => {
    return (
        <div>
            <SectionTitle heading='Payment' subHeading='Please pay to eat' />
            <Elements stripe={stripePromise}>
                <CheckoutFrom/>
            </Elements>
        </div>
    );
};

export default Payment;