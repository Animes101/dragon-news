import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
const BrakingNews = () => {

  const [sticky ,setSticky]=useState(false);

    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY > 0 ? setSticky(true) : setSticky(false)

        })
    },[]);

  
  return (
    <div className={`flex items-center justify-center sticky top-0 ${sticky ? 'bg-green-400 z-10': ''}`}>
        <button className="p-2 bg-[#D72050] text-white rounded-lg">Latest</button>
      <Marquee className="text-base font-bold ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
    </div>
  );
};

export default BrakingNews;
