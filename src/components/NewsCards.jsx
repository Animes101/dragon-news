import PropTypes from "prop-types";
import { CiSaveDown1 } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { Link } from "react-router-dom";

const NewsCards = ({ news }) => {
  console.log(news);

  const { image_url, _id, rating, details, author, title } = news;
  return (
    <div>
      <div className="bg-slate-100/70 px-6 py-4 mx-auto rounded-2xl space-y-6 shadow-md">
        {/* author area */}
        <div className="flex justify-between items-center p-2 border border-gray-400 rounded-md">
          <div className="flex">
            <img
              className="rounded-full w-10 h-10"
              src={author.img}
              alt="hello"
            />
            <div>
              <h1 className="text-base">{author.name}</h1>
              <h1 className="text-base">{author.published_date}</h1>
            </div>
          </div>

          <div className="flex gap-3">
            <span>
              <CiSaveDown1 />
            </span>
            <span>
              <CiShare2 />
            </span>
          </div>
        </div>
        {/* Card Image */}
        <h3>{title}</h3>
        <img
          className="bg-gray-400 rounded-2xl"
          src={image_url}
          alt="card navigate ui"
        />
        {/* Card Heading */}
        <div className="space-y-2">
          <h2 className="text-slate-800 font-medium md:text-xl sm:text-lg ">
            {details.slice(0, 100)}{" "}
            <Link className="text-red-300" to={`/details/${_id}`}>
              Read More
            </Link>
          </h2>
          {/* rating  */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#1E293B"
                stroke="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>
        {/* Price and action button */}
        <div className="mt-5 flex justify-between items-center font-medium">
          <h2 className="md:text-xl text-gray-800">{rating.number}</h2>
          <button className="bg-slate-700 text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;

NewsCards.propTypes = {
  news: PropTypes.object,
};
