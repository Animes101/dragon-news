import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const LeftSection = () => {
  const [catagory, setCatagory] = useState(null);

  useEffect(() => {
    fetch("/categories.json")
      .then((res) => res.json())
      .then((data) => setCatagory(data));
  });

  return (
    <div>
      <h1 className="text-xl font-bold">All Caterogy</h1>
      <ul className="flex flex-col">
        {catagory?.map((item) => (
          <NavLink className={`text-lg`} to={``} key={item.id}>
            {item.name}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default LeftSection;
