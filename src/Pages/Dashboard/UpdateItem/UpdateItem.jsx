import { FaUtensils } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const UpdateItem = () => {
    const {name, category, price, recipe, _id } = useLoaderData();
    const { register, handleSubmit, reset } = useForm();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();

    const image_hosting_Key = import.meta.env.VITE_image_hosting_Key;
    const image_url = `https://api.imgbb.com/1/upload?key=${image_hosting_Key}`

    const onSubmit = async(data) => {
        const imageFile = { image: data.image[0] }
        console.log(data)
        console.log("image file: " + imageFile);
        const res = await axiosPublic.post(image_url, imageFile, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        console.log(res.data);
        if(res.data.success){
          //now sent data in database
          const menuItem = {
            name : data.name,
            category : data.category,
            price : parseFloat(data.price),
            recipe : data.recipe,
            image : res.data.data.display_url
    
          }
          const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
          if(menuRes.data.insertedId){
            reset();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.name} is updated to the menu`,
              showConfirmButton: false,
              timer: 1500
            });
          }
          console.log(menuRes.data);
        }
    
    };



  return (
    <div>
      <SectionTitle subHeading="update an item" heading="CHANGE INFORMATION" />
      <div className="bg-[#F3F3F3] m-6 rounded-xl">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe name</span>
            </label>
            <input
              type="text"
              defaultValue={name}
              placeholder="Name"
              className="input input-bordered"
              {...register("name", { required: true })}
            />
          </div>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                defaultValue={category}
                {...register("category", { required: true })}
                className="select select-bordered"
              >
                <option disabled value="others">
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soups">Soups</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                defaultValue={price}
                placeholder="Price"
                className="input input-bordered"
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              placeholder="Recipe Details"
              defaultValue={recipe}
              {...register("recipe", { required: true })}
              className="textarea textarea-bordered textarea-lg w-full h-56"
            ></textarea>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="w-full max-w-xs mt-4"
          />

          {/* <input type="submit" className="btn" /> */}
          <button className="btn w-[210px] mt-4">
            update menu item
            <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
