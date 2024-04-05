import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
    .then(result=>{

      console.log(result.user)
      console.log('user log out')
    })
    .catch(err=>{
      console.log(err.message)
    })
  };

  console.log(user);
  return (
    <nav className="flex items-center justify-between text-black px-4 py-2 ">
      <div className="scale-100 rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2 className="text-black">Logo</h2>
      </div>
      <ul className="flex items-center justify-between gap-6 text-slate-900">
        <Link
          to="/"
          className="cursor-pointer text-base  rounded-full  px-6 py-2 "
        >
          Home
        </Link>
        <li className="cursor-pointer text-base  rounded-full px-6 py-2 ">
          Services
        </li>
        <li className="cursor-pointer  text-base rounded-full px-6 py-2">
          About
        </li>
      </ul>
      <div className="flex ">
        <div className="relative group">
          <img
            className="size-[80px] bg-slate-500 object-cover rounded-full border-4 border-white shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]"
            src="https://source.unsplash.com/300x300/?profile"
            alt="avatar navigate ui"
          />
          <span className="size-5 bg-white p-[2px] shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  group-hover:-rotate-180 duration-500 absolute rounded-full -bottom-2 left-[50%] -translate-x-1/2">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#60A5FA"
            >
              {" "}
              <g strokeWidth="0"></g>{" "}
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>{" "}
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title>{" "}
                <g id="Complete">
                  <g data-name="add" id="add-2">
                    <g>
                      {" "}
                      <line
                        fill="none"
                        stroke="#60A5FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="12"
                        x2="12"
                        y1="19"
                        y2="5"
                      ></line>
                      <line
                        fill="none"
                        stroke="#60A5FA"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        x1="5"
                        x2="19"
                        y1="12"
                        y2="12"
                      ></line>
                    </g>
                  </g>
                </g>
              </g>
            </svg>
          </span>
        </div>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to={`/login`} className="">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
