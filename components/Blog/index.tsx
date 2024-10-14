"use client";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./page";
import blogData from "./blogData";
import { useRouter } from "next/navigation";

const Blog = () => {
  const routerr = useRouter();
  const blogToShow = blogData
    .sort(
      (a, b) =>
        new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime(),
    )
    .slice(0, 6);

  return (
    <section
      id="blog"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28"
    >
      <div className="container">
        <SectionTitle
          title="Bloq Yazılarımız"
          paragraph="Ən son yazılarımız..."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogToShow.map((blog) => (
            <div
              key={blog.id}
              onClick={() => {
                routerr.push(`/bloq/${blog.id}`);
              }}
              className="w-full"
            >
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
