import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import logo from "/icons/logo.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const links = [
  {
    id: 1,
    name: "About Us",
    path: "/about-us",
  },
  {
    id: 2,
    name: "Our Services",
    path: "/our-services-and-features",
  },
  {
    id: 3,
    name: "Contact Us",
    path: "/contact-us",
  },
];

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#87cdea] px-5 md:px-10 lg:px-40 py-20 text-black">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 flex flex-col gap-5">
            <img
              src={logo}
              alt="Martify Agency"
              className="object-cover w-10 h-10"
            />
            <p className="text-base">{t("bi")}</p>
            <div className="flex items-center gap-5">
              <a
                href="https://www.facebook.com/profile.php?id=100087426981747"
                target="_blank"
                className="text-lg sm:text-2xl bg-white flex items-center justify-center p-3 rounded-full"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/martifyagency/"
                target="_blank"
                className="text-lg sm:text-2xl bg-white flex items-center justify-center p-3 rounded-full"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.linkedin.com/company/martify-agency/"
                target="_blank"
                className="text-lg sm:text-2xl bg-white flex items-center justify-center p-3 rounded-full"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/martifyagency/status/1791802461273088116?s=46"
                target="_blank"
                className="text-lg sm:text-2xl bg-white flex items-center justify-center p-3 rounded-full"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.youtube.com/@Martifyagency"
                target="_blank"
                className="text-lg sm:text-2xl bg-white flex items-center justify-center p-3 rounded-full"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex items-center text-base gap-5 underline">
              <FaEnvelope />
              info@martifyagency.com.au
            </div>
            <div className="flex gap-3 items-center text-gray-700 text-base">
              {links.map((link) => (
                <Link to={link.path} key={link.id}>
                  {link.name}
                </Link>
              ))}
              <a href="https://g.page/r/CTrG1Lhu-71OEAI/review" target="_blank">
                Reviews
              </a>
              <a
                href="https://martifyagency.com.au/blog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Innovations
              </a>
            </div>
            <p className="text-lg text-gray-700">ABN: 746847955121</p>
          </div>
        </div>
        <div className="w-full h-0.5 bg-black"></div>
        <span className="text-xs text-black">
          &copy; {new Date().getFullYear()} : Martify Agency - All right
          reserved
        </span>
      </div>
    </section>
  );
};

export default Footer;
