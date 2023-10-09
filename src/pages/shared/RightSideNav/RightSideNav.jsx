import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from "../../../assets/qZone1.png"
import qZone2 from "../../../assets/qZone2.png"
import qZone3 from "../../../assets/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const RightSideNav = () => {

    const {signInWithGoogle} = useContext(AuthContext)



  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Login with</h2>
        <button onClick={signInWithGoogle} className="btn btn-outline w-full">
          <FaGoogle />
          Login With Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub />
          Login With Github
        </button>
      </div>
      <div className="p-4 mb-6">
        <h2 className="text-3xl mb-4">Find Us On</h2>
        <a
          className="p-4 flex items-center text-lg border border-blue-400 rounded-t-lg"
          href=""
        >
          <FaFacebook className="mr-2" />
          <span>Facebook</span>
        </a>
        <a
          className="p-4 flex items-center text-lg border-x border-blue-400 "
          href=""
        >
          <FaTwitter className="mr-2" />
          <span>Twitter</span>
        </a>
        <a
          className="p-4 flex items-center text-lg border border-blue-400 rounded-b-lg"
          href=""
        >
          <FaInstagram className="mr-2" />
          <span>Instagram</span>
        </a>
      </div>
      {/* Q-Zone */}
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl">Q Zone</h2>
       <img src={qZone1}alt="" />
       <img src={qZone2}alt="" />
       <img src={qZone3}alt="" />
      </div>

    </div>
  );
};

export default RightSideNav;
