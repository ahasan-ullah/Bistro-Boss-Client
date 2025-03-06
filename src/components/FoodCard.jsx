import { useContext } from "react";
import { authContext } from "../providers/AuthProvider";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({item}) => {
  const {name,image,price,recipe}=item;
  const {user}=useAuth();
  const navigate=useNavigate();
  const location=useLocation();
  const handleAddToCart=(food)=>{
    if(user && user.email){
      console.log(food,user.email);
      const cartItem={
        menuId: _id,
      }
    }
    else{
      Swal.fire({
        title: "You are not logged in",
        text: "Please log in to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Log in!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login',{state: {from: location}});
        }
      });
    }
    
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="" /></figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 rounded-md p-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={()=>handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;