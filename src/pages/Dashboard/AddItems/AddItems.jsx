import { FaUtensils } from "react-icons/fa6";
import SectionTitle from "../../../components/SectionTitle";
import { useForm } from "react-hook-form";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <SectionTitle
        heading={"add an item"}
        subHeading={"What's new?"}
      ></SectionTitle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* recipe name */}
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Recipe Name*</legend>
            <input
              {...register("name", {required: true})}
              type="text"
              className="input input-bordered w-full"
              placeholder="Type here"
            />
          </fieldset>
          <div className="flex gap-6">
            {/* category */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Category*</legend>
              <select
                {...register("category", {required: true})}
                defaultValue="Select a category"
                className="select select-bordered w-full"
              >
                <option disabled={true}>Select a category</option>
                <option value={"salad"}>Salad</option>
                <option value={"pizza"}>Pizza</option>
                <option value={"soup"}>Soup</option>
                <option value={"dessert"}>Dessert</option>
                <option value={"drinks"}>Drinks</option>
              </select>
            </fieldset>
            {/* price */}
            <fieldset className="fieldset w-full">
              <legend className="fieldset-legend">Price*</legend>
              <input
                {...register("price", {required: true})}
                type="text"
                className="input input-bordered w-full"
                placeholder="Type here"
              />
            </fieldset>
          </div>
          <fieldset className="fieldset w-full">
            <legend className="fieldset-legend">Recipe Details*</legend>
            <textarea {...register("recipe", {required: true})} className="textarea textarea-bordered h-32 w-full" placeholder="Bio"></textarea>
          </fieldset>
          <input {...register("image", {required: true})} type="file" className="file-input file-input-bordered block" />
          <button className="btn text-xl bg-orange-500 text-white">Add Item <FaUtensils className="ml-2"></FaUtensils></button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
