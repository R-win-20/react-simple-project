import { useTranslation } from "react-i18next";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import fq from "../assets/fq.jpg";
import vision from "../assets/vision.jpg";
import grow from "../assets/grow.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="relative h-96 w-full overflow-hidden">
        <img src={f2} className="relative h-96 w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-75"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex mx-2 sm:mx-10 lg:mx-40">
            <div className="flex flex-col gap-6 mb-10">
              <span className="text-lg text-[#b7e7fa]">[ {t("b")} ]</span>
              <h2 className="text-white font-bold text-5xl">{t("bj")}</h2>
              <span className="text-sm flex gap-5">
                <a
                  className="flex items-center gap-2 text-white cursor-pointer"
                  href="/"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 576 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
                  </svg>
                  {t("a")}
                </a>
                <span className="text-white"> &gt; </span>
                <span className="text-[#b7e7fa]">{t("b")}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-5 md:mx-10 lg:mx-40 py-20">
          <div className="flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="flex-1">
                <img
                  src={fq}
                  alt="Martify Agency"
                  aria-placeholder=""
                  loading="lazy"
                  className="object-contain border-t-4 border-r-4 border-[#b7e7fa] rounded-bl-3xl"
                />
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-6">
                  <h2 className="text-3xl text-black font-medium">{t("bk")}</h2>
                  <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {t("bl")}{" "}
                  </p>
                  <p class="text-sm text-gray-500 font-light leading-snug">
                    {t("bm")}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-4 items-center">
                <h1 className="text-4xl text-black font-semibold text-center lg:text-start">
                  {t("bn")}
                </h1>
                <span className="text-lg text-gray-500 px-10 lg:px-44 text-center">
                  {t("bo")}
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/3">
                  <div className="flex flex-col gap-4 bg-[#b7e7fa] hover:bg-gray-100 transition-all duration-100 cursor-pointer">
                    <img
                      alt="Martify Agency"
                      title=""
                      src={f1}
                      aria-placeholder=""
                      loading="lazy"
                      className="object-cover w-full h-48"
                    />
                    <h2 className="text-center text-3xl text-black">
                      {t("bp")}
                    </h2>
                    <p className="text-center text-sm leading-relaxed text-gray-500 pb-10 px-3">
                      {t("bq")}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="flex flex-col gap-4 bg-[#b7e7fa] hover:bg-gray-100 transition-all duration-100 cursor-pointer">
                    <img
                      alt="Martify Agency"
                      title=""
                      src={vision}
                      aria-placeholder=""
                      loading="lazy"
                      className="object-cover w-full h-48"
                    />
                    <h2 className="text-center text-3xl text-black">
                      {t("br")}
                    </h2>
                    <p className="text-center text-sm leading-relaxed text-gray-500 pb-10 px-10">
                      {t("bs")}
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/3">
                  <div className="flex flex-col gap-4 bg-[#b7e7fa] hover:bg-gray-100 transition-all duration-100 cursor-pointer">
                    <img
                      alt="Martin Zigashane"
                      title=""
                      src={grow}
                      aria-placeholder=""
                      loading="lazy"
                      className="object-cover w-full h-48"
                    />
                    <h2 className="text-center text-3xl text-black">
                      {t("z")}
                    </h2>
                    <div className="flex flex-col gap-2 pb-10 px-5">
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("bt")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("bu")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("bv")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("bw")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("bx")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("by")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("bz")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("ca")}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <span className="material-symbols-outlined text-cyan-400 text-xl">
                          {" "}
                          chevron_right{" "}
                        </span>
                        <span className="text-sm leading-relaxed text-gray-500">
                          {t("cb")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
