import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogData } from "./getBlogData";
/* import image from "/images/Kanuausflug.jpg"; */
const BlogHomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const data = getBlogData();
    console.log("Fetched data:", data);
    setPosts(data);
  }, []);

  const sortedPosts = posts.slice(0, 6);

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-black">
          Recent Blogs
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPosts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.file.replace(".mdx", "")}`}
            className="group"
          >
            <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt={post.category}
                className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
              />
            </div>

            <div className="mt-7">
              <span className="uppercase text-green-600 font-semibold text-xs sm:text-sm pt-10">
                {post.category}
              </span>
              <h3 className="text-2xl font-semibold text-black hover:text-blue-900">
                {post.title}
              </h3>

              <span className="capitalize text-gray-600 font-semibold text-sm sm:text-base">
                {post.date}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogHomePage;
