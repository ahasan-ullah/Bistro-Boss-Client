const FoodCard = ({item}) => {
  const {name,image,price,recipe}=item;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="" /></figure>
      <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 rounded-md p-2">${price}</p>
      <div className="card-body">
        <h2 className="card-title text-center">{name}</h2>
        <p className="text-center">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline bg-slate-100 border-0 border-b-4 border-orange-400">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;