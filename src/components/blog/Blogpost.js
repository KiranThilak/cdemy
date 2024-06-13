import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MDXProvider } from "@mdx-js/react";
import InlineCodeHighlight from "./InlineCodeHighlight";
import CoverSection from "./CoverSection";
import { getBlogData } from "./getBlogData";

const BlogPost = () => {
  const { slug } = useParams();
  const [MDXContent, setMDXContent] = useState(null);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const blogs = getBlogData();
    const currentBlog = blogs.find((blog) => blog.file === `${slug}.mdx`);
    setBlog(currentBlog);

    if (currentBlog) {
      import(`./posts/${currentBlog.file}`)
        .then((module) => {
          setMDXContent(() => module.default);
        })
        .catch((error) =>
          console.error(`Error loading MDX file: ${error.message}`)
        );
    }
  }, [slug]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <MDXProvider components={{ CoverSection, inlineCode: InlineCodeHighlight }}>
      <div className="h2styles h3styles pstyles max-w-5xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-5 md:space-y-8">
            <CoverSection
              category={blog.category}
              date={blog.date}
              title={blog.title}
              image={blog.image}
            />
            {MDXContent ? <MDXContent /> : <p>Loading...</p>}
          </div>
        </div>
      </div>
    </MDXProvider>
  );
};

export default BlogPost;
