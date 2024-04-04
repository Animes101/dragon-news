
import { NavLink } from "react-router-dom";

const Navbar = () => {


  return (
    <div>
      <nav className="flex items-center justify-between  px-4 py-2">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold transition-all duration-200 hover:scale-110">
          <h2 className="font-bold text-4xl text-green-400">News</h2>
        </div>
        <div className="flex items-center justify-between gap-16">
          <ul className="flex items-center justify-between gap-10">
            <li className="text-base group flex  cursor-pointer flex-col">
              <NavLink to='/'
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-2" : ""
                }
              >
                Home
              </NavLink>
              <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-base group flex  cursor-pointer flex-col">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-2" : ""
                }
              >
                About
              </NavLink>
              <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="text-base group flex  cursor-pointer flex-col">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-2" : ""
                }
              >
                Career
              </NavLink>
             
                <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
           </li>
          </ul>
          <div className="flex items-center justify-between gap-5">
            <div>
              <div className="relative group">
                <img
                  className="size-[80px] bg-slate-500 object-cover rounded-full"
                  src="https://source.unsplash.com/300x300/?profile"
                  alt="avatar navigate ui"
                />
                <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 border-[3px] border-white"></span>
                <span className="size-4 bg-green-500 absolute rounded-full bottom-2 right-0 animate-ping"></span>
              </div>
            </div>
            <button className="text-xl w-32 h-14 bg-[#403F3F] text-white relative overflow-hidden group z-10 hover:text-white duration-1000">
              <span className="absolute bg-sky-600 size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span>
              <span className="absolute bg-sky-800 size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>
              Login
            </button>{" "}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
