import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate()
    const { googleSingIn } = useAuth()
    const axiosPublic = useAxiosSecure()
    const handleGoogleLogin = () => {
        googleSingIn()
            .then(res => {
                const {displayName, email }= res.user;
                const userInfo = {
                    name: displayName,
                    email
                }
                axiosPublic.post('/user', userInfo)
                    .then(() => {
                      Swal.fire("update login successfully");
                      navigate('/')
                    })
            })
            .catch(err => console.error(err));
};
  return (
    <div className='px-6 pb-4'>
      <button onClick={handleGoogleLogin} className="btn text-[#4285F4]">
        <FaGoogle/>
        Google Login
      </button>
    </div>
  );
};

export default SocialLogin;
