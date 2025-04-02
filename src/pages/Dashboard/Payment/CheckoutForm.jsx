import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const {user}=useAuth();
  const stripe=useStripe();
  const elements=useElements();
  const [transactionId,setTransactionId]=useState('');
  const [error,setError]=useState('');
  const [clientSecret,setClientSecret]=useState('');
  const axiosSecure=useAxiosSecure();
  const [cart,refetch]=useCart();
  const navigate=useNavigate();
  const price=[];



  cart.map(p=>price.push(p.price));
  const totalPrice=price.reduce((total,item)=>total+item,0);

  useEffect(()=>{
    if(totalPrice>0){
      axiosSecure.post('/create-payment-intent',{totalPrice}).then(res=>{
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      })
    }
  },[axiosSecure,totalPrice]);

  const handleSubmit=async(event)=>{
    event.preventDefault();
    if(!stripe || !elements){
      return;
    }

    const card=elements.getElement(CardElement);

    if(card==null){
      return;
    }

    const {error,paymentMethod}=await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      setError(error.message);
    }
    else{
      setError('')
    }

    const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
      payment_method: {
        card: card,
        billing_details: {
          email: user?.email || 'unknown',
          name: user?.displayName || 'unknown'
        }
      }
    })

    if(confirmError){
      console.log('confirm error')
    }
    else{
      if(paymentIntent.status==='succeeded'){
        setTransactionId(paymentIntent.id);
      }
      const payment={
        email: user.email,
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(),
        cartId: cart.map(item=>item._id),
        menuId: cart.map(item=>item.menuId),
        status: 'pending'
      }
      const res=await axiosSecure.post('/payments',payment);
      refetch();
      if(res.data?.paymentResult?.insertedId){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Successfull",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/dashboard/payment-history')
      }
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {
        transactionId && <p className="text-green-600">Your Transaction id : {transactionId}</p>
      }
    </form>
  );
};

export default CheckoutForm;