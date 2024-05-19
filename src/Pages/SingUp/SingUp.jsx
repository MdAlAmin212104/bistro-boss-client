import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import Swal from "sweetalert2";

const SingUp = () => {
    const {createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
      //console.log(data);
        const { email, password, name, photo } = data;
        createUser(email, password)
            .then(() => {
                updateUserProfile(name, photo)
                  .then(() => {
                    Swal.fire("update user successfully");
                    reset();
                    navigate('/')
                    
                  })
                  .catch(err => console.error(err))
            })
            
            .catch(err => console.error(err));
    };

    console.log(watch("email"))




  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sing Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="text"
                name="photo"
                {...register("photo")}
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
              {errors.photo && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required
              />
              {errors.email && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true })}
                placeholder="password"
                className="input input-bordered"
                required
              />
              {errors.password && <span className="text-red-400">This field is required</span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="SingUp" />
            </div>
          </form>
          <h2>Have an Account <Link to='/login'>Login</Link> </h2>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
