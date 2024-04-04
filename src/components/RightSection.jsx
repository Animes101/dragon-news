import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import qz1 from '../assets/qZone1.png';
import qz2 from '../assets/qZone2.png';
import qz3 from '../assets/qZone3.png';

const RightSection = () => {

  return (
    <div>
      {/* login area */}
      <div className="border border-gray-300">
        <h1 className="font-bold text-base">Login Width</h1>

        <div className=" flex flex-col items-center justify-center space-y-4">
          <div className="flex border border-gray-300 p-3 rounded-md hover:text-green-400 gap-x-3">
            <span className="inline-block">
              <FaGoogle />
            </span>
            <button className=" text-base">Login With Google</button>
          </div>
          <div className="flex border border-gray-300 p-3 rounded-md hover:text-green-400 gap-x-3">
            <span>
              <FaGithub />
            </span>
            <button className="text-base">Login width GitHub</button>
          </div>
        </div>
      </div>
      {/* socile link */}

      <div>
        <h1 className="text-lg">Find Us On</h1>
        <ul className="border border-gray-300 p-2 space-y-5">
          <li className="text-lg cursor-pointer ">
            <span className="inline-block mr-5">
              <FaFacebookF />
            </span>
            facebook
          </li>
          <hr />
          <li className="text-lg cursor-pointer ">
            <span className="inline-block mr-5">
              <FaTwitter />
            </span>
            Twitter
          </li>
          <hr />
          <li className="text-lg cursor-pointer ">
            <span className="inline-block mr-5">
              <FaInstagram />
            </span>
            Instragram
          </li>
        </ul>
      </div>
      {/* Q-Zone */}

      <div className="flex justify-center flex-col">
        <img src={qz1} alt="" />
        <img src={qz2} alt="" />
        <img src={qz3} alt="" />
      </div>
    </div>
  );
};

export default RightSection;
