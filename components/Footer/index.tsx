"use client";
import Link from "next/link";
import Social from "../Social/Social";

const Footer = () => {
  const emailAddress = "info@brightacademy.az";
  const emailLink = `mailto:${emailAddress}`;
  return (
    <footer className="relative z-10 bg-white pt-10 dark:bg-gray-dark">
      <div className="container">
        <div className="flex flex-wrap justify-between">
          {/* Logo and Description */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-3/12">
            <div className="mb-8">
              <Link
                href="/"
                className="mb-4 inline-block text-2xl font-bold text-black dark:text-white"
              >
                BRİGHT
              </Link>
              <p className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Sizin uğurunuz bizim nəaliyyətimizdir...
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
                Faydalı linklər
              </h2>
              <ul>
                <li className="mb-4">
                  <Link
                    href="/"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Ana səhifə
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/bloq"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Bloq
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/haqqimizda"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Haqqımızda
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/elaqe"
                    className="text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    Əlaqə
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/3 lg:w-3/12">
            <div className="mb-8">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Əlaqə
              </h2>
              <ul>
                <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  <span className="mr-2 font-bold">Telefon:</span>
                  <a
                    href="tel:+994704390607"
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    +994 70 439 06 07
                  </a>
                </li>

                <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  <span className="mr-2 font-bold">Email:</span>{" "}
                  <a
                    href={emailLink}
                    className="text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    {emailAddress}
                  </a>
                </li>
                <li className="mb-4 text-base text-body-color dark:text-body-color-dark">
                  <span className="mr-2 font-bold">Ünvan:</span> Bakı, Süleyman
                  Rəhimov 197
                </li>
              </ul>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.464245205028!2d49.827639675093096!3d40.37640235809423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dbc42dba4a1%3A0x21b2b3488e89a7!2s197%20Suleyman%20Rahimov%20St%2C%20Baku%201009!5e0!3m2!1str!2saz!4v1728909374648!5m2!1str!2saz"
            width="auto"
            height="auto"
            style={{ border: "0" }}
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
            Bright Academy &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
