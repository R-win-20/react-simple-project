import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import fq from "../assets/fq.jpg";
import ReCAPTCHA from "react-google-recaptcha";
import "react-toastify/ReactToastify.css";

const Contact = () => {
  const { t } = useTranslation();
  const recaptchaRef = useRef(null);
  const [isVerified, setIsVerified] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_vbvq24m", "template_euknbvk", form.current, {
        publicKey: "GGQuMSl1GwQoMgkLL",
      })
      .then(
        () => {
          toast.success("Message Sent Successfully");
          form.current.reset(); // Reset the Form
          recaptchaRef.current.reset(); // Reset reCAPTCHA
          setIsVerified(false); // Reset verification state
        },
        (error) => {
          toast.error("Failed to send message. Please try again.");
        }
      );
  };

  const onChange = (value) => {
    setIsVerified(true);
  };

  return (
    <div className="flex flex-col">
      <section className="relative h-96 w-full overflow-hidden">
        <img src={fq} className="relative h-96 w-full object-cover" />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-black opacity-75"></div>
        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex mx-2 sm:mx-10 lg:mx-40">
            <div className="flex flex-col gap-6 mb-10">
              <span className="text-lg text-[#b7e7fa] capitalize">
                [ {t("d")} ]
              </span>
              <h2 className="text-white font-bold text-5xl">{t("bd")}</h2>
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
        <div className="mx-2 sm:mx-10 md:mx-40 py-20">
          <div className="flex flex-col gap-7">
            <h2 className="text-black text-5xl font-normal">{t("cl")}</h2>
            <p className="text-lg text-gray-400 leading-snug">{t("cm")}</p>
            <div className="flex flex-col lg:flex-row gap-20">
              <div className="flex-1">
                <form
                  className="flex flex-col gap-3"
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full">
                    <input
                      type="text"
                      className="myborder md:w-1/2 p-3 text-sm text-gray-500 focus:outline-none rounded-md"
                      placeholder={t("cn")}
                      name="user_name"
                      required
                    />
                    <input
                      type="text"
                      className="myborder md:w-1/2 p-3 text-sm text-gray-500 focus:outline-none rounded-md"
                      placeholder={t("co")}
                      name="user_company"
                      required
                    />
                  </div>
                  <div className="flex flex-col md:flex-row gap-3 md:gap-5 w-full">
                    <input
                      type="text"
                      className="myborder md:w-1/2  p-3 text-sm text-gray-500 focus:outline-none rounded-md"
                      placeholder={t("cp")}
                      name="user_email"
                      required
                    />
                    <input
                      type="text"
                      className="myborder md:w-1/2  p-3 text-sm text-gray-500 focus:outline-none rounded-md"
                      placeholder={t("cq")}
                      name="user_phone"
                      required
                    />
                  </div>
                  <textarea
                    className="myborder p-3 text-sm text-gray-500 focus:outline-none rounded-md"
                    rows="5"
                    placeholder={t("cr")}
                    name="message"
                    required
                  ></textarea>
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey="6LeeMw4rAAAAAMubbFli0X9RVhACsW7sSVnr9BbS"
                    onChange={onChange}
                  />

                  <button
                    type="submit"
                    disabled={!isVerified}
                    className="w-fit bg-cyan-400 px-4 py-3 text-white text-sm font-light rounded-md cursor-pointer hover:bg-black"
                  >
                    {t("cs")}
                  </button>
                </form>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col gap-2 border-cyan-400 border-l-4 px-10 py-2">
                    <h2 className="text-black text-sm font-medium uppercase">
                      {" "}
                      {t("ct")}
                    </h2>
                    <span className="text-sm text-gray-400">
                      36 Jansar St, Point Cook VIC 3030, Australia
                    </span>
                  </div>
                  <hr className="myborder" />
                  <div className="flex flex-col gap-2 border-orange-400 border-l-4 px-10 py-2">
                    <h2 className="text-black text-sm font-medium uppercase">
                      {" "}
                      {t("cu")}
                    </h2>
                    <span className="text-sm text-gray-400">
                      +61 042 120 4349
                    </span>
                  </div>
                  <hr className="myborder" />
                  <div className="flex flex-col gap-2 border-blue-400 border-l-4 px-10 py-2">
                    <h2 className="text-black text-sm font-medium uppercase">
                      {" "}
                      {t("cv")}
                    </h2>
                    <span className="text-sm text-gray-400">
                      martifyagency@gmail.com
                    </span>
                    <span class="text-sm text-gray-400">
                      info@martifyagency.com.au
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-10 pb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d50428.31061348129!2d144.94562542790084!3d-37.818869697700414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1712395118805!5m2!1sen!2stz"
            class="w-full h-screen"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Contact;
