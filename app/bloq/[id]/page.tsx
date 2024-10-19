"use client";
import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";
import Head from "next/head";
import { useParams } from "next/navigation";
import blogData from "@/components/Blog/blogData";

const BlogContent = ({ content }) => {
  return (
    <div>
      {content.map((part, index) => {
        if (part.type === "heading") {
          const HeadingTag = `h${part.level}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag key={index} className="mb-2  text-black dark:text-white text-lg font-semibold">
              {part.text}
            </HeadingTag>
          );
        } else if (part.type === "paragraph") {
          return (
            <p key={index} className="mb-4 text-black dark:text-white">
              {part.text}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
};

const BlogDetailsPage = () => {
  const { id } = useParams();

  // Blog verisini bulma
  const blog = blogData.find((post) => post.id === Number(id));

  // Blog yoksa hata mesajı döndür
  if (!blog) {
    return <p>Blog tapılmadı</p>;
  }

  const { title, paragraph, content, image, author, tags, publishDate } = blog;

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
                            fill
                            className="object-cover "
                          />
                        </div>
                      </div>
                      <div className="w-full">
                        <span className="mb-1 text-base font-medium text-body-color">
                          Yazan <span>{author.name}</span>
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
                  <div className="relative h-[450px] aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={image}
                      alt={title}
                      quality={95}
                      priority
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <BlogContent content={content} />

                {/* Sayfanın alt kısmına taglar ve paylaşma bileşenini ekle */}
                <div className="mt-10 items-center justify-between sm:flex">
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-medium text-body-color">
                      Bənzər etiketlər
                    </h4>
                    <div className="flex items-center">
                      {tags.map((tag, index) => (
                        <TagButton key={index} text={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="mb-5">
                    <h5 className="mb-3 text-sm font-medium text-body-color sm:text-right">
                      Postu sosial mediada paylaş.
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
