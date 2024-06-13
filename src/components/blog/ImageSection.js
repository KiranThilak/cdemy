// ImageSection.js
import React from "react";
import image3 from "";

const ImageSection = ({ image1, image2 }) => {
  return (
    <div>
      {image1 && image2 ? (
        <div className="flex justify-center mt-10 space-x-4">
          <figure className="relative max-w-xl">
            <img
              src={image1}
              alt="blogImage 1"
              className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-xl"
            />
          </figure>
          <figure className="relative max-w-xl">
            <img
              src={image2}
              alt="blogImage 2"
              className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-xl"
            />
          </figure>
        </div>
      ) : (
        <figure className="mt-10 relative max-w-5xl mx-auto">
          <img
            src={image1 || image2}
            alt="blogImage"
            className="w-full object-cover h-96 sm:h-[480px] bg-no-repeat bg-center bg-cover rounded-xl"
          />
        </figure>
      )}
    </div>
  );
};

export default ImageSection;
