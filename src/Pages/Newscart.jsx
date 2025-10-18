import React from "react";
import { FaEye, FaShareAlt } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import { CiBookmark } from "react-icons/ci";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 mb-6">
      {/* Header */}
      <div className="flex bg-base-200 justify-between items-center p-4 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-primary flex gap-1">
            <CiBookmark />

          <FaShareAlt />
        </button>
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>

        {/* Image */}
        <figure>
          <img
            src={thumbnail_url}
            alt={title}
            className="rounded-lg w-full object-cover mb-4"
          />
        </figure>

        {/* Details */}
        <p className="text-sm text-gray-600">
          {details.slice(0, 180)}...
          <span className="text-primary cursor-pointer"> Read More</span>
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center p-4 border-t text-sm">
        <div className="flex items-center text-orange-500">
          {Array.from({ length: 5 }, (_, i) => (
            <AiFillStar key={i} className={i < rating.number ? "" : "text-gray-300"} />
          ))}
          <span className="ml-2 text-gray-700 font-medium">{rating.number}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaEye /> <span>{total_view}</span>
        </div>
      </div>

      {/* Tags */}
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="badge badge-outline text-xs text-primary border-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
