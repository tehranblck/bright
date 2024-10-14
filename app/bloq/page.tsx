"use client";
import SingleBlog from "@/components/Blog/page";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1); // Mevcut sayfa
  const blogsPerPage = 3; // Her sayfada gösterilecek blog sayısı
  const totalBlogs = blogData.length; // Toplam blog sayısı
  const totalPages = Math.ceil(totalBlogs / blogsPerPage); // Toplam sayfa sayısı

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  const router = useRouter();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Head>
        <title>Bloq səhifəsi | Bright Academy ilə dil öyrən</title>
        <meta name="description" content="Dil kursu Bright Academy" />
      </Head>

      <Breadcrumb
        pageName="Bloq"
        description="Ən son yeniliklərdən xəbərdar ol!"
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                onClick={() => router.push(`/bloq/${blog.id}`)}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                {/* Önceki butonu */}
                <li className="mx-1">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Öncəki
                  </button>
                </li>

                {/* Sayfa numaraları */}
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index} className="mx-1">
                    <Link
                      href="#0"
                      onClick={() => handlePageChange(index + 1)}
                      className={`flex h-9 min-w-[36px] items-center justify-center rounded-md ${
                        currentPage === index + 1
                          ? "bg-primary text-white"
                          : "bg-body-color bg-opacity-[15%] text-body-color"
                      } px-4 text-sm transition hover:bg-primary hover:bg-opacity-100 hover:text-white`}
                    >
                      {index + 1}
                    </Link>
                  </li>
                ))}

                {/* Sonraki butonu */}
                <li className="mx-1">
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Növbəti
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
