import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const Payment = () => {
  const stripePromise=loadStripe(import.meta.env.VITE_Payment_Gateway);
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;