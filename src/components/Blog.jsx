import React from "react";
import { Helmet } from "react-helmet";
const PDFViewer = React.lazy(() => import("./PDFViewer"));
const Footer = React.lazy(() => import("./Footer"));
import logo from "/icons/logo.png";
import banner from "../assets/R.jpg";
import rheam from "../assets/rheam.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Blog = () => {
  return (
    <>
      <Helmet htmlAttributes>
        <html lang="en" />
        <title>
          Blog - Martify Agency | Elevating Your Digital Presence through expert
          Marketing Services
        </title>
        <link rel="canonical" href="https://www.martifyagency.com.au/" />
        <meta name="description" content="Basic example" />
        <meta
          name="description"
          content="Discover expert marketing insights from Martify Agency. Elevate your digital presence with our professional marketing services, strategies, and industry trends."
        />
        <meta
          name="keywords"
          content="digital marketing, marketing services, marketing agency, Martify Agency, marketing blog, digital presence, marketing strategies"
        />
        <meta name="author" content="Martify Agency" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.martifyagency.com.au/" />
        <meta
          property="og:title"
          content="Blog - Martify Agency | Elevating Your Digital Presence through Expert Marketing Services"
        />
        <meta
          property="og:description"
          content="Discover expert marketing insights from Martify Agency. Elevate your digital presence with our professional marketing services, strategies, and industry trends."
        />
        <meta
          property="og:image"
          content="https://www.martifyagency.com.au/logo.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://www.martifyagency.com.au/" />
        <meta
          name="twitter:title"
          content="Blog - Martify Agency | Elevating Your Digital Presence through Expert Marketing Services"
        />
        <meta
          name="twitter:description"
          content="Discover expert marketing insights from Martify Agency. Elevate your digital presence with our professional marketing services, strategies, and industry trends."
        />
        <meta
          name="twitter:image"
          content="https://www.martifyagency.com.au/logo.png"
        />
      </Helmet>
      <div className="flex flex-col">
        <nav className="shadow-xl py-3 px-5 md:px-20 xl:px-40">
          <div className="flex items-center justify-between">
            <div className="w-8 h-8 lg:w-14 lg:h-14">
              <img
                src={logo}
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-full"
                alt="Martify Agency"
                loading="lazy"
              />
            </div>
            <div className="flex items-center gap-2 xl:gap-5 text-black">
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
          </div>
        </nav>
        <div className="flex flex-col">
          <header className="h-1/2 w-full">
            <img
              src={banner}
              width={200}
              height={200}
              className="object-cover w-full h-[320px]"
              alt="Martify Agency"
              loading="lazy"
            />
          </header>
          <div className="flex items-center gap-3 px-5 md:px-20 xl:px-40 mt-4">
            <div className="w-8 h-8 lg:w-14 lg:h-14">
              <img
                src={rheam}
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-full"
                alt="Martify Agency"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg xl:text-2xl">Rhean Bean</h3>
              <span className="text-[12px]">Published: 23/05/2025</span>
            </div>
          </div>
        </div>
        <section className="py-20 px-5 md:px-20 xl:px-40">
          <div className="flex flex-col items-center justify-center">
            <PDFViewer />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
