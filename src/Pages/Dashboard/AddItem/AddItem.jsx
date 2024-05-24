import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  };
  return (
    <div>
      <SectionTitle heading="ADD AN ITEM" subHeading="What's new?" />
      <div className="bg-[#F3F3F3] m-6 rounded-xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered"
              {...register("name", {required: true})}
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                {...register("category", {required: true})}
                className="select select-bordered"
              >
                <option disabled selected>
                  {''}
                  Select a category
                </option>
                <option value="Salad">Salad</option>
                <option value="Pizza">Pizza</option>
                <option value="Soups">Soups</option>
                <option value="Dessert">Dessert</option>
                <option value="Drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered"
                {...register("price", {required: true})}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              {...register("recipe", {required: true})}
              className="textarea textarea-bordered textarea-lg w-full h-56"
            ></textarea>
          </div>
          <input type="file" {...register("image", {required: true})} className="w-full max-w-xs mt-4" />

          {/* <input type="submit" className="btn" /> */}
          <button className="btn w-[110px] mt-4">
            Submit
            <FaUtensils/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
