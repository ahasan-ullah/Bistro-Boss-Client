import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle'
import { Elements } from '@stripe/react-stripe-js';
const Payment = () => {
  const stripePromise=loadStripe('');
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"}></SectionTitle>
      <div>
        <Elements stripe={stripePromise}>
          
        </Elements>
      </div>
    </div>
  );
};

export default Payment;