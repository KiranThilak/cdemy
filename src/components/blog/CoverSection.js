import React from "react";

const CoverSection = ({ image, date, category, title }) => {
  return (
    <div>
      <div className="metadata flex justify-center space-x-5 mt-6">
        <span className="tag-name bg-green-200 px-3 text-sm text-grey-200 py-1 rounded-full cursor-pointer hover:bg-green-300">
          {category}
        </span>
      </div>
      <h1 className="block text-3xl font-bold text-indigo-900 sm:text-4xl md:text-5xl text-center mx-auto pt-4">
        {title}
      </h1>
      <div className="metadata flex justify-center space-x-5 mt-6">
        <span className="date text-lg text-gray-500">{date}</span>
      </div>
      <figure className="mt-10 relative max-w-5xl mx-auto">
        <img
          src={image}
          alt="Cover"
          className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-xl"
        />
      </figure>
    </div>
  );
};

export default CoverSection;
