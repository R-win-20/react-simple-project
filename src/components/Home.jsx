import { useTranslation } from "react-i18next";
import bghero from "../assets/bghero.jpg";
import bgvideo from "../assets/bgvideo.mp4";
import f1 from "../assets/f1.jpg";
import marketing from "../assets/marketing2.jpg";
import Animtext from "./Animtext";
import {
  FaComputerMouse,
  FaSearchengin,
  FaTradeFederation,
} from "react-icons/fa6";
import dm1 from "../assets/dm1.webp";
import dm2 from "../assets/dm2.webp";
import dm3 from "../assets/dm3.jpeg";
import grow from "../assets/grow.jpg";
import R from "../assets/R.jpg";
import brand0 from "../assets/091A2300.jpg";
import brand1 from "../assets/091A2313.jpg";
import brand2 from "../assets/091A2355.jpg";
import brand3 from "../assets/091A2427.jpg";
import brand4 from "../assets/brandsimg.jpg";
import brand5 from "../assets/091A2437.jpg";
import ability from "../assets/ability.png";
import acscleaning from "../assets/acscleaning.jpg";
import adas from "../assets/adas.jpg";
import agape from "../assets/Agape.jpg";
import auzmaid from "../assets/auzmaid.jpg";
import cblc from "../assets/cblc.png";
import christelle from "../assets/christelle.jpeg";
import faster from "../assets/fastercare.jpg";
import fgss from "../assets/fgss.png";
import gilgal from "../assets/gilgal.png";
import mettle from "../assets/mettle.png";
import place from "../assets/place.png";
import rscs from "../assets/rscs.jpg";
import ssg from "../assets/ssg.png";
import tender from "../assets/tender.png";
import xproject from "../assets/xproject.png";
import immacule from "../assets/immaculte.png";
import vital from "../assets/vital.jpg";

import Marquee from "react-fast-marquee";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      {/* Hero section */}
      <section className="w-full h-screen lg:h-[95dvh] relative">
        <img
          src={bghero}
          alt="Digital Marketing"
          className="object-cover relative w-full h-full"
        />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black opacity-75"></div>
        <div className="absolute top-1/2 left-0 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 text-white text-center">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center lg:items-end">
            <div className="flex flex-col items-center px-2 lg:px-0">
              <span className="text-[#87cdea] text-sm">{t("g")}</span>
              <h1 className="text-4xl capitalize md:text-5xl font-bold my-2">
                {t("h")}
              </h1>
              <p className="text-xl text-gray-400 font-light my-1">{t("i")}</p>
              <a
                href=""
                className="font-light text-sm w-fit lg:text-lg bg-[#87cdea] px-4 py-2 text-black rounded-md mt-4"
              >
                {t("j")}
              </a>
            </div>
            <div className="">
              <Animtext />
            </div>
          </div>
        </div>
      </section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#87cdea"
          fillOpacity="1"
          d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      {/* Video section */}
      <section className="bg-white">
        <div className="px-5 md:px-10 lg:px-40 pt-10 pb-20">
          <video
            className="video-js w-full h-screen object-cover rounded-xl"
            id="my-video"
            controls
            preload="auto"
            data-setup="{}"
          >
            <source src={bgvideo} type="video/mp4"></source>
          </video>
        </div>
      </section>

      {/* Section One  */}
      <section className="">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#87cdea"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>

        <div className="px-5 sm:px-10 lg:px-40 pb-20 flex flex-col lg:flex-row gap-20 bg-[#87cdea]">
          <div className="flex-1">
            <div className="flex flex-col gap-7 justify-center pt-10">
              <span className="text-black text-lg font-semibold">{t("k")}</span>
              <h2 className="text-5xl sm:text-6xl text-black font-bold">
                {t("l")}
              </h2>
              <span className="text-gray-700 lg:text-xl leading-snug">
                {t("m")}
              </span>
              <div className="px-4 py-2 border-2 border-black rounded-md w-fit hover:bg-black">
                <a
                  href="https://calendly.com/martifyagency/strategy-call"
                  target="__blank"
                  className="text-black text-sm lg:text-lg hover:text-white"
                >
                  {t("n")}
                </a>
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="w-full h-full">
              <img
                src={f1}
                alt="Martify Agency image"
                className="object-contain rounded-md lg:hover:scale-110 transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#87cdea"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="bg-slate-100">
        <div className="mx-5 sm:mx-10 lg:mx-40 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2 justify-center items-center">
            <span className="text-gray-600 text-sm">{t("o")}</span>
            <h2 className="text-5xl bg-custome-title-trafic font-bold py-5 text-center lg:text-start">
              {t("p")}
            </h2>
            <span className="text-sm lg:text-xl text-slate-800 font-light px-5 sm:px-10 lg:px-28 text-center">
              {t("q")}
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1">
              <div className="flex flex-col gap-3">
                <div className="bg-white px-6 py-3 flex flex-col gap-3 border-l-4 border-cyan-400">
                  <h3 className="text-black text-2xl font-medium">{t("r")}</h3>
                  <span className="text-sm lg:text-xl text-gray-500">
                    {t("s")}
                  </span>
                </div>
                <div className="bg-white px-6 py-3 flex flex-col gap-3 border-l-4 border-orange-600">
                  <h3 className="text-black text-2xl font-medium">{t("t")}</h3>
                  <span className="text-sm lg:text-xl text-gray-500">
                    {t("u")}
                  </span>
                </div>
                <div className="bg-white px-6 py-3 flex flex-col gap-3 border-l-4 border-blue-600">
                  <h3 className="text-black text-2xl font-medium">{t("v")}</h3>
                  <span className="text-sm lg:text-xl text-gray-500">
                    {t("w")}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={marketing}
                alt="Martify Agency"
                loading="lazy"
                aria-placeholder=""
                className="w-full h-80 rounded-md object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 min-w-72 max-w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="flex flex-col bg-white">
          <div className="flex gap-6 items-center justify-center px-10">
            <hr className="border-0.5 border-black w-32" />
            <h3 className="text-sm text-black text-nowrap">{t("x")}</h3>
            <hr className="border-0.5 border-black w-32" />
          </div>
          <div className="w-full py-24">
            <div className="flex overflow-hidden group">
              <Marquee
                play
                pauseOnHover={true}
                loop={0}
                delay={0}
                speed={55}
                className="flex items-center gap-4"
              >
                <img
                  src={faster}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={immacule}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={vital}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={gilgal}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={adas}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={fgss}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={mettle}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={acscleaning}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={xproject}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={rscs}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={place}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={auzmaid}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={ssg}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={tender}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={christelle}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={auzmaid}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={cblc}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={agape}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
                <img
                  src={ability}
                  alt="martify agency partners and clients"
                  loading="lazy"
                  className="w-20 h-20 object-contain mx-8"
                />
              </Marquee>
            </div>
          </div>
        </div>
        <div className="px-5 sm:px-10 md:px-10 lg:px-40 pb-20 bg-white">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
              <div className="flex-1">
                <div className="flex flex-col gap-6">
                  <span className="text-lg text-black">{t("y")}</span>
                  <h2 className="text-5xl text-black font-bold">{t("z")}</h2>
                  <span className="text-lg text-gray-600 leading-relaxed font-extralight">
                    {t("aa")}
                  </span>
                  <div className="w-fit bg-black px-6 py-3 rounded-md hover:scale-105 duration-150 ease-in-out transition-all">
                    <a
                      href="https://calendly.com/martifyagency/strategy-call"
                      className="text-white text-lg uppercase"
                    >
                      {t("ab")}
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-amber-300">
                <iframe
                  className="w-full h-96 lg:h-[350px]"
                  src="https://www.youtube.com/embed/fZVXhms2TUo?si=cbIR0cMbkeaFJVjc"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 mb-10">
              <div className="w-full md:w-1/3 bg-white">
                <div className="flex flex-col py-5 gap-2 pl-5 md:pl-0 md:items-center shadow-2xl border-l-4 border-[#87cdea]">
                  <h2 className="text-5xl text-black font-bold">10+</h2>
                  <span className="text-sm text-gray-500 font-extralight">
                    {t("ac")}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-white">
                <div className="flex flex-col py-5 gap-2 pl-5 md:pl-0 md:items-center shadow-2xl border-l-4 border-orange-400">
                  <h2 className="text-5xl text-black font-bold">500+</h2>
                  <span className="text-sm text-gray-500 font-extralight">
                    {t("ad")}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-white">
                <div className="flex flex-col py-5 gap-2 pl-5 md:pl-0 md:items-center shadow-2xl border-l-4 border-black">
                  <h2 className="text-5xl text-black font-bold">989+</h2>
                  <span className="text-sm text-gray-500 font-extralight">
                    {t("ae")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#fff"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="bg-slate-100">
        <div className="mx-2 sm:mx-10 md:mx-10 lg:px-40 pb-20">
          <div className="flex flex-col gap-5 items-center justify-center">
            <span className="text-sm text-[#87cdea] bg-white px-5 py-2 rounded-3xl -mt-4">
              {t("af")}
            </span>
            <h2 className="text-black text-2xl sm:text-3xl md:text-5xl font-bold text-center py-10">
              {t("ag")}
            </h2>
            <div className="flex flex-col md:flex-row gap-14 md:gap-4">
              <div className="w-full md:w-1/3">
                <div className="flex flex-col gap-4 items-center">
                  <span className="bg-white rounded-full p-5 w-fit">
                    <FaSearchengin className="object-contain w-8 h-8 text-[#87cdea]" />
                  </span>
                  <h2 className="text-black text-xl font-medium text-center">
                    {t("ah")}
                  </h2>
                  <span className="text-gray-600 text-center lg:text-lg">
                    {t("ai")}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="flex flex-col gap-4 items-center">
                  <span className="bg-white rounded-full p-5 w-fit">
                    <FaComputerMouse className="object-contain w-8 h-8 text-[#87cdea]" />
                  </span>
                  <h2 className="text-black text-xl font-medium text-center">
                    {t("aj")}
                  </h2>
                  <span className="text-gray-600 text-center lg:text-lg">
                    {t("ak")}
                  </span>
                </div>
              </div>
              <div className="w-full md:w-1/3">
                <div className="flex flex-col gap-4 items-center">
                  <span className="bg-white rounded-full p-5 w-fit">
                    <FaTradeFederation className="object-contain w-8 h-8 text-[#87cdea]" />
                  </span>
                  <h2 className="text-black text-xl font-medium text-center">
                    {t("al")}
                  </h2>
                  <span className="text-gray-600 text-center lg:text-lg">
                    {t("am")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#87cdea"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="px-2 sm:px-10 md:px-40 bg-[#87cdea]">
          <div className="flex flex-col gap-7 items-center">
            <span className="text-sm text-black bg-white px-5 py-2 rounded-3xl -mt-4">
              {t("an")}
            </span>
            <h2 className="text-4xl md:text-6xl text-black font-bold text-center py-10">
              {t("ao")}
            </h2>
            <div className="flex flex-col gap-5 mb-20">
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-96 h-fit shadow-xl shadow-white hover:scale-105 ease-in-out transition-all">
                  <img
                    src={dm1}
                    alt="graphich martify"
                    aria-placeholder=""
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-96">
                  <h2 className="text-black text-xl font-medium">{t("ap")}</h2>
                  <span className="text-sm lg:text-lg text-black">
                    {t("aq")}
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                <div className="w-full md:w-96 h-fil shadow-xl shadow-white hover:scale-105 ease-in-out transition-all">
                  <img
                    src={dm2}
                    alt="graphics martify agency"
                    aria-placeholder=""
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-96">
                  <h2 className="text-black text-xl font-medium">{t("ar")}</h2>
                  <span className="text-sm lg:text-lg text-black">
                    {t("as")}
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-96 h-fil shadow-xl shadow-white hover:scale-105 ease-in-out transition-all">
                  <img
                    src={dm3}
                    className="w-full h-full object-contain rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-96">
                  <h2 className="text-black text-xl font-medium">{t("at")}</h2>
                  <span className="text-sm lg:text-lg text-black">
                    {t("au")}
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row-reverse gap-10 items-center">
                <div className="w-full md:w-96 h-fit shadow-xl shadow-white hover:scale-105 ease-in-out transition-all">
                  <img
                    src={grow}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex flex-col gap-5 w-full sm:w-96 px-5 sm:px-0">
                  <h2 className="text-black text-xl font-medium">{t("av")}</h2>
                  <span className="text-sm lg:text-lg text-black">
                    {t("aw")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#87cdea"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section className="bg-slate-100 relative">
        <div className="mx-1 sm:mx-10 md:mx-40 py-20">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1">
              <div className="flex flex-col gap-5 px-4 lg:px-0">
                <h2 className="text-black text-3xl font-light">
                  {t("ax")} <b className="font-bold text-black">{t("ay")}</b>
                </h2>
                <div className="w-1/3">
                  <hr className="border-b-4 border-[#87cdea]" />
                </div>
                <p className="text-lg font-normal text-gray-500">{t("az")}</p>
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 640 512"
                      className="text-[#87cdea] text-3xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M471.1 96C405 96 353.3 137.3 320 174.6 286.7 137.3 235 96 168.9 96 75.8 96 0 167.8 0 256s75.8 160 168.9 160c66.1 0 117.8-41.3 151.1-78.6 33.3 37.3 85 78.6 151.1 78.6 93.1 0 168.9-71.8 168.9-160S564.2 96 471.1 96zM168.9 320c-40.2 0-72.9-28.7-72.9-64s32.7-64 72.9-64c38.2 0 73.4 36.1 94 64-20.4 27.6-55.9 64-94 64zm302.2 0c-38.2 0-73.4-36.1-94-64 20.4-27.6 55.9-64 94-64 40.2 0 72.9 28.7 72.9 64s-32.7 64-72.9 64z"></path>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-xl text-black font-semibold">
                        {t("ba")}
                      </h2>
                      <span className="text-sm text-gray-400 font-medium">
                        {t("bb")}
                      </span>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col gap-3">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 512 512"
                      className="text-[#87cdea] text-3xl"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z"></path>
                    </svg>
                    <div className="flex flex-col gap-1">
                      <h2 className="text-xl text-black font-semibold">
                        {t("bc")}
                      </h2>
                      <a
                        href="https://www.martifyagency.com.au/contact"
                        target="_blank"
                        className="text-sm text-gray-400 font-medium"
                      >
                        {t("bd")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <img
                src={R}
                alt=""
                className="object-cover scale-100 hover:scale-105 ease-in duration-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#87cdea"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div className="px-1 sm:px-10 md:px-40 py-20 bg-[#87cdea]">
          <div className="flex flex-col gap-10 items-center justify-center">
            <h3 className="text-6xl text-black font-semibold text-center">
              Brand your Business with us Today
            </h3>
            <a
              href="https://calendly.com/martifyagency/strategy-call"
              className="text-black border-2 border-black px-7 py-3 lg:hover:bg-black lg:hover:text-white rounded-md cursor-pointer"
            >
              Get Started
            </a>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#87cdea"
            fillOpacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>

      <section>
        <div className="mx-1 sm:mx-10 md:mx-40 py-20">
          <div className="flex flex-col gap-10">
            <h2 className="text-[#b7e3fa] text-6xl font-black text-center">
              Branding
            </h2>
            <span className="text-2xl text-gray-400 text-center">
              We can brand, we can advertise, we can do everything to advance
              your business
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              <div className="h-full">
                <img
                  title="Branding Martify Agency"
                  alt="Martify Agency Product"
                  src={brand0}
                  className="object-cover scale-100 lg:hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="h-full">
                <img
                  title="Branding Martify Agency"
                  alt="Martify Agency Product"
                  src={brand1}
                  className="object-cover scale-100 lg:hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="h-full">
                <img
                  title="Branding Martify Agency"
                  alt="Martify Agency Product"
                  src={brand2}
                  className="object-cover scale-100 lg:hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="h-full">
                <img
                  title="Branding Martify Agency"
                  alt="Martify Agency Product"
                  src={brand3}
                  className="object-cover scale-100 lg:hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="h-full">
                <img
                  title="Branding Martify Agency"
                  alt="Martify Agency Product"
                  src={brand4}
                  className="object-cover w-full h-full scale-100 lg:hover:scale-105 ease-in duration-300"
                />
              </div>
              <div className="h-full">
                <img
                  title="Branding Martify Agency"
                  alt="Martify Agency Product"
                  src={brand5}
                  className="object-cover scale-100 lg:hover:scale-105 ease-in duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
