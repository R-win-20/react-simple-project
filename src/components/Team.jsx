import { useTranslation } from "react-i18next";
import meetings from "../assets/meeting22.jpg";
import main from "../assets/main.jpg";
import kato from "../assets/kato.jpg";
import windows01 from "../assets/windows01.jpg";
import nawshad from "../assets/nawshad.jpeg";
import mamood from "../assets/mamood.jpg";
// import avatar02 from "../assets/avatar02.png";
import rhean from "../assets/rheam.jpg";
// import emma from "../assets/emma.jpeg";

const Team = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col">
      <section className="relative h-96 w-full overflow-hidden">
        <img src={meetings} className="relative h-96 w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-75"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex mx-2 sm:mx-10 lg:mx-40">
            <div className="flex flex-col gap-6 mb-10">
              <span className="text-lg text-[#b7e7fa] capitalize">
                [ {t("cw")} ]
              </span>
              <h2 className="text-white font-bold text-5xl">{t("cx")}</h2>
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
                <span className="text-[#b7e7fa] capitalize">{t("d")}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-1 sm:mx-10 md:mx-40 py-20">
          <div className="flex flex-col gap-5">
            <h1 className="text-black text-3xl sm:text-5xl font-bold self-center">
              {t("cx")}
            </h1>
            <span className="text-gray-500 text-sm md:text-xl self-center">
              {t("cy")}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-3 lg:mt-20">
              <div className="w-full ">
                <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-start">
                  <div className="sm:w-full">
                    <img
                      src={main}
                      alt="Martify Agency, Digital Marketing Agency"
                      className="object-contain rounded-2xl w-60 h-60 grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      Martin Zigashane
                    </h1>
                    <span className="text-gray-500 font-medium text-lg">
                      CEO / Founder
                    </span>
                    <span className="text-gray-400 font-medium text-sm">
                      Location - Melbourne, Australia
                    </span>
                    <span className="text-gray-400 font-light text-sm">
                      martinz@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-start">
                  <div className="sm:w-full">
                    <img
                      src={kato}
                      loading="lazy"
                      alt="Martify Agency, Digital Marketing Agency, Kato Joel"
                      className="object-contain rounded-2xl w-60 h-60 grayscale"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      Kato Dennis Joel
                    </h1>
                    <span className="text-gray-500 font-medium text-lg">
                      Business Manager
                    </span>
                    <span className="text-gray-400 font-medium text-sm">
                      Location - Quebec,&nbsp;Canada
                    </span>
                    <span className="text-gray-400 font-light text-sm">
                      jkato@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-start">
                  <div className="sm:w-full">
                    <img
                      src={nawshad}
                      alt="Martify Agency, Digital Marketing Agency"
                      className="object-cover rounded-2xl w-60 h-60 grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      Reduanullah Nawshad
                    </h1>
                    <span className="text-gray-500 font-medium text-lg">
                      ADS&nbsp;Expert
                    </span>
                    <span className="text-gray-400 font-light text-sm">
                      nawshad@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full ">
                <div className="flex flex-col gap-3 items-center justify-center lg:items-start lg:justify-start">
                  <div className="sm:w-full">
                    <img
                      src={windows01}
                      alt="Martify Agency, Digital Marketing Agency"
                      className="object-contain rounded-2xl w-60 h-60 grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      Rassel Windows
                    </h1>
                    <span className="text-gray-500 font-medium text-lg">
                      Web Designer
                    </span>
                    <span className="text-gray-400 font-light text-sm">
                      windows@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span className="text-2xl text-black self-center mt-10 underline">
              Operation Team
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 px-5 sm:px-0 mt-20">
              <div class="w-full">
                <div class="flex flex-col gap-3 items-center justify-center">
                  <div class="">
                    <img
                      src={rhean}
                      alt="Martify Agency, Digital Marketing Agency"
                      class="object-cover rounded-2xl h-32 w-32 grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div class="flex flex-col gap-0.5 items-center justify-center">
                    <h1 class="text-black text-lg md:text-xl font-bold">
                      Rhean Ibanez
                    </h1>
                    <span class="text-gray-500 font-medium text-lg">
                      Virtual Assistant.
                    </span>
                    <span class="text-gray-400 font-light text-sm">
                      rhean@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="flex flex-col gap-3 items-center justify-center">
                  <div className="">
                    <img
                      src={mamood}
                      alt="Martify Agency, Digital Marketing Agency"
                      className="object-contain rounded-2xl h-32 w-32 grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-col gap-0.5 items-center justify-center">
                    <h1 className="text-black text-lg md:text-xl font-bold">
                      Muhammad Younas Mamoond
                    </h1>
                    <span className="text-gray-500 font-medium text-lg">
                      Digital Marketer
                    </span>
                    <span className="text-gray-400 font-light text-sm">
                      mamoond@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
              {/* <div class="w-full">
                <div class="flex flex-col gap-3 items-center justify-center">
                  <div class="">
                    <img
                      src={emma}
                      alt="Martify Agency, Digital Marketing Agency"
                      class="object-contain rounded-2xl h-32 w-32 grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div class="flex flex-col gap-0.5 items-center justify-center">
                    <h1 class="text-black text-lg md:text-xl font-bold">
                      Emma
                    </h1>
                    <span class="text-gray-500 font-medium text-lg">
                      Client success manager
                    </span>
                    <span class="text-gray-400 font-light text-sm">
                      emma@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
