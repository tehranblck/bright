"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import AnimatedDiv from "../Animated";
import { TransitionLink } from "../utils/TransitionLink";
import Image from "next/image";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const pathname = usePathname();

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center justify-between ${sticky
          ? "fixed z-[9999] bg-white/50 bg-opacity-40 backdrop-blur-lg shadow-md border border-white/20 rounded-xl transition dark:bg-gray-dark dark:bg-opacity-30 dark:shadow-sticky-dark"
          : "absolute bg-transparent"
          }`}
      >
        <AnimatedDiv className="w-full" animationType="slideY">
          <div className="container mx-auto py-2 flex items-center justify-between px-4">
            {/* Logo Bölümü - Sol */}
            <div className="flex items-center w-1/3">
              <Link
                href="/"
                className={`header-logo text-[rgb(74 108 247)] text-3xl font-bold`}
              >
                <Image width={120} height={120} alt="logo" src={'/logo.svg'} />
              </Link>
            </div>

            {/* Navbar Bölümü - Orta */}
            <div className="hidden lg:flex w-1/3 justify-center">
              <nav className="flex space-x-6">
                <ul className="flex space-x-6">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="group relative">
                      {menuItem.path ? (
                        <TransitionLink
                          href={menuItem.path}
                          className={`hover-slide-animation relative py-2 text-base lg:inline-flex ${pathname === menuItem.path
                            ? "text-[#1c7d50] dark:text-white"
                            : "text-dark hover:text-[#17422e] dark:text-white/70 dark:hover:text-white"
                            }`}
                        >
                          {menuItem.title}
                        </TransitionLink>
                      ) : (
                        <>
                          <p
                            onClick={() => handleSubmenu(index)}
                            className="cursor-pointer py-2 text-base text-dark dark:text-white/70 dark:hover:text-white lg:inline-flex"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="25" height="24" viewBox="0 0 25 24">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </p>
                          <div
                            className={`submenu absolute top-full left-0 bg-white dark:bg-dark p-4 shadow-lg ${openIndex === index ? "block" : "hidden"
                              }`}
                          >
                            {menuItem.submenu.map((submenuItem, subIndex) => (
                              <Link
                                href={submenuItem.path}
                                key={subIndex}
                                className="block py-2 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* ThemeToggler ve Navbar Toggle - Sağ */}
            <div className="flex items-center w-1/3 justify-end space-x-4">
              {/* <ThemeToggler /> */}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="lg:hidden"
              >
                <span
                  className={`block h-0.5 w-6 bg-black transition-all dark:bg-white ${navbarOpen ? "transform rotate-45 translate-y-1.5" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-black my-1.5 transition-all dark:bg-white ${navbarOpen ? "opacity-0" : ""
                    }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-black transition-all dark:bg-white ${navbarOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile Navbar */}
          <div
            className={`navbar absolute right-0 z-30 w-[250px] rounded border bg-white dark:bg-dark lg:hidden ${navbarOpen ? "block" : "hidden"
              }`}
          >
            <ul className="flex flex-col p-4 space-y-4">
              {menuData.map((menuItem, index) => (
                <li key={index} className="group relative">
                  {menuItem.path ? (
                    <TransitionLink
                      href={menuItem.path}
                      className="text-dark dark:text-white/70 dark:hover:text-white"
                    >
                      {menuItem.title}
                    </TransitionLink>
                  ) : (
                    <>
                      <p
                        onClick={() => handleSubmenu(index)}
                        className="cursor-pointer text-dark dark:text-white/70"
                      >
                        {menuItem.title}
                      </p>
                      {openIndex === index && (
                        <ul className="pl-4 space-y-2">
                          {menuItem.submenu.map((submenuItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={submenuItem.path}
                                className="text-dark dark:text-white/70"
                              >
                                {submenuItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedDiv>
      </header>
    </>
  );
};

export default Header;
