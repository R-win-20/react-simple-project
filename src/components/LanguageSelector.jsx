// import { useTranslation } from "react-i18next";

// const LanguageSelector = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//   };

//   return (
//     <>
//       <div className="bg-white text-black rounded-sm py-1 lg:rounded-md">
//         <select
//           onChange={(e) => changeLanguage(e.target.value)}
//           className="px-4 py-1 md:py-2 focus:outline-none rounded-md"
//         >
//           <option value="en">English</option>
//           <option value="de">German</option>
//           <option value="sw">Swahili</option>
//           <option value="fr">French</option>
//           <option value="sp">Spanish</option>
//         </select>
//       </div>
//       <div className="dropdown">
//         <button className="dropdown-button rounded-md" id="fhome">
//           Langue
//         </button>
//         <div class="dropdown-content">
//           <a href="#" id="fr">
//             FR
//           </a>
//           <a href="#" id="en">
//             EN
//           </a>
//         </div>
//       </div>
//     </>
//   );
// };

// export default LanguageSelector;

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || "en");

  // Available languages
  const languages = [
    { code: "sw", name: "Swahili" },
    { code: "en", name: "English" },
    { code: "fr", name: "French" },
    { code: "de", name: "German" },
    { code: "sp", name: "Spanish" },
  ];

  // Update language when changed elsewhere
  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18n.language);
    };

    i18n.on("languageChanged", handleLanguageChange);
    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".language-selector")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Get current language name
  const currentLangName =
    languages.find((lang) => lang.code === currentLanguage)?.name || "English";

  return (
    <div className="language-selector relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-600 shadow-sm px-4 py-2 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          id="language-menu"
          aria-expanded={isOpen}
          aria-haspopup="true"
          onClick={toggleDropdown}
          aria-label={t("languageSelector.changeLanguage")}
        >
          {currentLangName}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === language.code
                    ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-100"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                role="menuitem"
                onClick={() => changeLanguage(language.code)}
                lang={language.code}
              >
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
