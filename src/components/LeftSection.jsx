import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSection = () => {
  const [catagory, setCatagroy] = useState([]);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCatagroy(data));
  }, []);
  return (
    <div>
      <h1 className="text-2xl font-bold">All Caterogy</h1>
      <ul className="flex flex-col">
        {catagory.map((item) => (
          <NavLink className={`text-lg`} to={``} key={item.id}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default LeftSection;
