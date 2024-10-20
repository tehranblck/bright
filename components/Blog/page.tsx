"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, paragraph, author, tags, publishDate } = blog;
  const route = useRouter();
  const paragraphSliced = paragraph.split(' ').slice(0, 16).join(' ');

  return (
    <div
      className="wow fadeInUp group relative  cursor-pointer overflow-hidden rounded-sm bg-white shadow-one duration-300 hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark"
      data-wow-delay=".1s"
    >
      <Link
        href={`/blog/${id}`}
        className="relative block aspect-[37/22] w-full"
      >
        <span className="absolute right-6 top-6 z-20 inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-semibold capitalize text-white">
          {tags[0]}
        </span>
        <Image
          src={image}
          alt={title}
          quality={95}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw" // Responsive için boyutlandırma
        />
      </Link>
      <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
        <h3 className='h-[60px]' >
          <Link
            href={`/blog/${id}`}
            className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-xl"
          >
            {title.split(' ').slice(0,5).join(' ')}
          </Link>
        </h3>
        <p className="mb-6 h-[100px] border-b border-body-color border-opacity-10 pb-0 text-base font-medium text-body-color dark:border-white dark:border-opacity-10 overflow-hidden">
          {paragraphSliced}...
        </p>
        <div className="flex items-center">
          <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
            <div className="mr-4">
              <div className="relative h-32 w-32 overflow-hidden rounded-full">
                <Image
                  src={author.image}
                  alt={author.name}
                  quality={95}
                  priority
                  fill
                  className="scale-50 rounded-full object-cover transition hover:scale-150" // Resmin düzgün görünmesi için class ekleyin
                />
              </div>
            </div>
            <div className="w-full">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Yazan {author.name}
              </h4>
              <p className="text-xs text-body-color">{author.designation}</p>
            </div>
          </div>
          <div className="inline-block">
            <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
              Tarix
            </h4>
            <p className="text-xs text-body-color">{publishDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
