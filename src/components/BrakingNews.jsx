import Marquee from "react-fast-marquee";
const BrakingNews = () => {
  return (
    <div className="flex items-center justify-center">
        <button className="p-2 bg-[#D72050] text-white rounded-lg">Latest</button>
      <Marquee className="text-base font-bold ">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Marquee>
    </div>
  );
};

export default BrakingNews;
