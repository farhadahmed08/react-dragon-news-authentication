import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const [registerError,setRegisterError]=useState('');
    const [success,setSuccess] = useState("");


  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");
    console.log(email, password, name, photo);
    e.target.reset()

    if (password.length <6) {
        setRegisterError(toast.error("password must be 6 digit"))
        return;
    }
    



    //reset error & success
    setRegisterError('');
    setSuccess("");
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess(toast.success("good job"))
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(toast.error(error.message))
      });
  };

  return (
    <div>
        <Navbar />
      <div>
        <h2 className="text-3xl text-center my-10"> Please login</h2>
        <form onSubmit={handleRegister} className="card-body md:w-3/4 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your Photo URL"
              className="input input-bordered"
              required
            />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center">
          Already have an account
          <Link className=" text-blue-600 font-bold" to="/login">
            Login
          </Link>
          {/* {
            registerError && <p className="text-red-500">{registerError}</p>
          }
          {
            success && <p className="text-green-600">{success}</p>
          } */}
        </p>
      </div>
    </div>
  );
};

export default Register;
