"use client";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Head from "next/head";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import blogData from "@/components/Blog/blogData";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const [hydratedContent, setHydratedContent] = useState<string | null>(null);

  const blog = blogData.find((post) => post.id === Number(id));

  if (!blog) {
    return <p>Blog tapılmadı</p>;
  }

  const { title, paragraph, content, image, author, tags, publishDate } = blog;

  useEffect(() => {
    setHydratedContent(content);
  }, [content]);

  return (
    <>
      <Head>
        <title>Bloq | {title}</title>
        <meta name="description" content={paragraph} />
      </Head>

      <section className="pb-[120px] pt-[150px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h2 className="salam mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                  {title}
                </h2>
                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
                  <div className="flex flex-wrap items-center">
                    <div className="mb-5 mr-10 flex items-center">
                      <div className="mr-4">
                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                          <Image
                            src={author.image}
                            alt={author.name}
                            layout="fill"
                            objectFit="cover"
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          By <span>{author.name}</span>
                        </span>
                      </div>
                    </div>
                    <div className="mb-5 flex items-center">
                      <p className="mr-5 flex items-center text-base font-medium text-body-color">
                        {publishDate}
                      </p>
                    </div>
                  </div>
                  <div className="mb-5">
                    {tags.map((tag, index) => (
                      <TagButton key={index} text={tag} />
                    ))}
                  </div>
                </div>
                <div className="mb-10 w-full overflow-hidden rounded">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={image}
                      alt={title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>

                {hydratedContent && (
                  <div
                    className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: hydratedContent,
                    }}
                  />
                )}

                {/* Sayfanın alt kısmına taglar ve paylaşma bileşenini ekle */}
                <div className="mt-10 items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-medium text-body-color">
                      Popular Tags:
                    </h4>
                    <div className="flex items-center">
                      {tags.map((tag, index) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Share this post:
                    </h5>
                    <div className="flex items-center sm:justify-end">
                      <SharePost />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsPage;
