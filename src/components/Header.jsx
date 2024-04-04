import moment from 'moment';
import headerImage from "../assets/logo.png";

const Header = () => {
  return (
    <div className='space-y-3'>
      <div className="flex justify-center items-center">
        <img className="" src={headerImage} alt="" />
      </div>
      <h3 className="text-center text-lg font-popines font-bold">
        Journalism Without Fear or Favour
      </h3>
      <h2 className='text-lg font-bold text-center font-popines'>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h2>
    </div>
  );
};

export default Header;
