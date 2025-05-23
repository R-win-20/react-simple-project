import { useTranslation } from "react-i18next";

import f2 from "../assets/f2.jpg";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="relative h-96 w-full overflow-hidden">
        <img src={f2} className="relative h-96 w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-75"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex mx-2 sm:mx-10 lg:mx-40">
            <div className="flex flex-col gap-6 mb-10">
              <span className="text-lg text-[#b7e7fa] capitalize">
                [ {t("c")} ]
              </span>
              <h2 className="text-white font-bold text-5xl">{t("cc")}</h2>
              <span className="text-sm flex gap-5">
                <a
                  className="flex items-center gap-2 capitalize text-white cursor-pointer"
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
                <span className="text-[#b7e7fa] capitalize">{t("c")}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#b7e7fa"
            fillOpacity="1"
            d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,53.3C840,75,960,117,1080,122.7C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <div className="pr-2 sm:pr-0 sm:px-10 lg:px-40 pb-20 bg-[#b7e7fa]">
          <div className="flex flex-col gap-10 lg:gap-20">
            <div className="flex flex-col gap-3 cursor-pointer items-center">
              <h1 className="text-black text-3xl xl:text-6xl font-bold text-center lg:text-start">
                {t("cd")}
              </h1>
              <p className="text-center text-lg text-black px:10 lg:px-52">
                {t("ce")}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="cursor-pointer shadow-white shadow-2xl">
                <div className="flex flex-col gap-5 p-10 items-center">
                  <div className="iborder p-4 rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 640 512"
                      className="scale-150 text-black"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"></path>
                    </svg>
                  </div>
                  <h2 className="text-black text-xl text-center">{t("cf")}</h2>
                  <span className="text-center text-black text-sm">
                    {t("cg")}
                  </span>
                  <span className="text-center text-black text-sm bg-cyan-300 px-6 py-2 rounded-full">
                    {t("ch")} - 20 {t("ci")}
                  </span>
                </div>
              </div>
              <div className="cursor-pointer shadow-2xl shadow-white">
                <div className="flex flex-col gap-5 p-10 items-center">
                  <div className="iborder p-4 rounded-full">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 320 512"
                      className="scale-150 text-black"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path>
                    </svg>
                  </div>
                  <h2 className="text-black text-xl text-center">{t("cj")}</h2>
                  <span className="text-center text-black text-sm">
                    {t("ck")}
                  </span>
                  <span className="text-center text-black text-sm bg-cyan-300 px-6 py-2 rounded-full">
                    {t("ch")} - 4 {t("ci")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#b7e7fa]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
          ></path>
        </svg>
        <div class="px-1 sm:px-10 md:px-40 py-20 bg-white">
          <div class="flex flex-col gap-10 items-center justify-center">
            <h3 class="text-6xl text-black text-center font-semibold">
              {t("be")}
            </h3>
            <a
              href="https://calendly.com/martifyagency/strategy-call"
              class="text-black border-2 border-black px-7 py-3 lg:hover:bg-black lg:hover:text-white rounded-md cursor-pointer"
            >
              {t("bf")}
            </a>
          </div>
        </div>
      </section>
      <div class="bg-[#87cdea]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
          <path
            fill="#ffffff"
            fill-opacity="1"
            d="M0,64L40,69.3C80,75,160,85,240,117.3C320,149,400,203,480,202.7C560,203,640,149,720,133.3C800,117,880,139,960,128C1040,117,1120,75,1200,64C1280,53,1360,75,1400,85.3L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Services;
