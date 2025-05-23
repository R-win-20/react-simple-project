import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from "/icons/logo.png";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  FaBars,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Navbar = () => {
  const { t } = useTranslation();
  const menuRef = useRef();
  const openMenu = () => {
    menuRef.current.style.left = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.left = "-320px";
  };

  const links = [
    {
      id: 1,
      name: `${t("a")}`,
      url: "/",
    },
    {
      id: 2,
      name: `${t("b")}`,
      url: "/about-us",
    },
    {
      id: 3,
      name: `${t("c")}`,
      url: "/our-services-and-features",
    },
    {
      id: 4,
      name: `${t("d")}`,
      url: "/contact-us",
    },
    {
      id: 5,
      name: `${t("e")}`,
      url: "/meet-the-team",
    },
  ];

  const classLink = ({ isActive }) =>
    isActive
      ? "text-black lg:text-[#87cdea] capitalize text-lg"
      : "text-gray-500 lg:text-white hover:text-[#87cdea] capitalize text-lg";

  return (
    <>
      <div className="absolute top-2 lg:top-1 left-0 right-0 w-full px-4 md:px-10 lg:px-40 mt-2 z-20 text-white">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 lg:w-14 lg:h-14">
            <img
              src={logo}
              className="object-cover w-full h-full rounded-full"
              alt="Martify Agency"
              loading="lazy"
            />
          </div>
          <div className="hidden lg:flex items-center gap-10 text-base">
            {links.map((link) => (
              <NavLink key={link.id} className={classLink} to={link.url}>
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />
            <a
              href="https://calendly.com/martifyagency/strategy-call"
              target="_blank"
              className="bg-[#87cdea] hidden md:flex px-4 py-2 rounded-md text-black hover:bg-white transition-all duration-75 ease-in"
            >
              {t("f")}
            </a>
            <div className="w-7 lg:hidden" onClick={openMenu}>
              <FaBars className="w-full text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="open-mob-menu lg:hidden" ref={menuRef}>
        <div className="flex items-center justify-between">
          <div className="close_mob_menu" onClick={closeMenu}>
            <span>X</span>
          </div>
          <div className="w-14 h-14 bg-gold rounded-md p-1 border-2 border-white">
            <img
              src={logo}
              alt="Martify Agency"
              className="object-contain rounded-md"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 capitalize text-xl mt-10">
          {links.map((link) => (
            <NavLink key={link.id} className={classLink} to={link.url}>
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-5 mt-10 text-black">
          <a
            href="https://www.facebook.com/profile.php?id=100087426981747"
            className="text-lg"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/martifyagency/"
            className="text-lg"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/company/martify-agency/"
            className="text-lg"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://x.com/martifyagency/status/1791802461273088116?s=46"
            className="text-lg"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.youtube.com/@Martifyagency"
            target="_blank"
            className="text-lg"
          >
            <FaYoutube />
          </a>
        </div>
        <span className="absolute bottom-5 text-xs self-center text-gray-500">
          Copyright &copy; MartifyAgency - {new Date().getFullYear()}
        </span>
      </div>
    </>
  );
};

export default Navbar;
