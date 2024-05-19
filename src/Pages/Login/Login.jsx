import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {
  const [disable, setDisable]= useState(true)
  const { singInUser } = useContext(AuthContext)

  useEffect(() =>{
    loadCaptchaEnginge(6);
  },[])


  const handleLogin = e => {
    e.preventDefault();
    const form = e.target
    const email = form.email.value;
    const password = form.password.value;
    singInUser(email, password)
      .then(() => {
        Swal.fire({
          title: "User login successful",
          text: "That thing is still around?",
          icon: "question"
        });
      })  
      .catch(err => console.error(err));
  }

  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if(validateCaptcha(user_captcha_value, false) == true){
      setDisable(false);
    }
    else{
      setDisable(true);
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="md:hero-content md:flex">
        <div className="text-center lg:text-left md:w-1/2">
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="md:w-1/2">
          <h1 className="text-5xl font-bold text-center">Login</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                onBlur={handleValidateCaptcha}
                type="password"
                name="captcha"
                placeholder="type the captcha above"
                className="input input-bordered"
              />
              <button className='btn btn-outline btn-xs mt-2'>Validate</button>
            </div>
            <div className="form-control mt-6">
              <input disabled={disable} className="btn btn-primary" type="submit" value='Login' />
            </div>
          </form>
          <h2>New Here Create an account<Link to='/singUp'>SingUp</Link> </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
