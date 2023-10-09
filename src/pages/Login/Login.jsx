import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    const [success,setSuccess] = useState("");
    const [registerError,setRegisterError]=useState('');
    
    const {signIn}=useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    console.log('location in the login page',location);
    
    
    const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email,password);
    signIn(email,password)
    .then(result =>{
        console.log(result.user);
        setSuccess(toast.success("good job"))
        // e.target.reset();
        // navigate after login
        navigate(location?.state ? location.state : '/')
    })
    .catch(error=>{
        console.log(error);
        setRegisterError(toast.error(error.message))
    })
  };

  return (
    <div>
        <Navbar />
      <div>
        <h2 className="text-3xl text-center my-10"> Please login</h2>
        <form onSubmit={handleLogin} className="card-body md:w-3/4 mx-auto">
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
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
              placeholder="Enter your Password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account
          <Link className=" text-blue-600 font-bold" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
