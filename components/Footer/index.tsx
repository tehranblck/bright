import Link from "next/link";
import Social from "../Social/Social";
import Elaqe from "./Elaqe";
import Image from "next/image";
import menuData from "../Header/menuData";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-10 dark:bg-gray-dark">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center justify-between">
          {/* Logo and Description */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-3/12">
            <div className="mb-8">
              <Link
                href="/"
                className="mb-4 inline-block text-2xl font-bold text-black dark:text-white"
              >
                <Image src={"/logo.svg"} alt="logo" width={100} height={100} />
              </Link>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Produck olarak, markaların ürün ve hizmetlerini en iyi şekilde anlatacak yüksek kaliteli, özgün ve yaratıcı video ve fotoğraf içerikleri sunuyoruz.
              </p>
              <div className="mt-4">
                <Social />
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-2/12">
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Faydalı linkler
              </h2>
              <ul>
                {menuData.map((menuItem, index) => (
                  <li key={index} className="mb-4">
                    <Link
                      href={menuItem.path}
                      className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <Elaqe
            className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-3/12"
            elaqe="İletişim"
          />
          <iframe
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3012.019446002714!2d28.730899075723975!3d40.98105502110124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa1a5b858cda9%3A0xf7a03300992e422d!2zR8O8bcO8xZ9wYWxhLCBNZXN1dCBTay4gTm86NywgMzQzMjAgQXZjxLFsYXIvxLBzdGFuYnVsLCBUw7xya2l5ZQ!5e0!3m2!1str!2saz!4v1730919131789!5m2!1str!2saz"
            width="auto"
            height="auto"
            style={{ border: "0", paddingBottom: "10px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          {/* Newsletter Subscription */}
          {/* <div className="w-full px-4 md:w-2/3 lg:w-4/12">
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Xəbərlərdən Xəbərdar Olun
              </h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Yeniliklərdən və xüsusi təkliflərimizdən xəbərdar olmaq üçün
                abunə olun.
              </p>
              <form>
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Email ünvanınız"
                    className="w-full rounded-l border border-gray-300 p-2 text-body-color focus:outline-none dark:bg-gray-700 dark:text-white"
                  />
                  <button
                    type="submit"
                    className="rounded-r bg-primary px-4 py-2 text-white hover:bg-opacity-90"
                  >
                    Abunə ol
                  </button>
                </div>
              </form>
            </div>
          </div> */}
        </div>

        <div className="h-px w-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="py-4">
          <p className="text-center text-base text-body-color dark:text-white">
            ProDuckFilm &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer >
  );
};

export default Footer;
