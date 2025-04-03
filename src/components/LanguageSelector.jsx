import { useTranslation } from "react-i18next";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-white text-black rounded-md">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-4 py-1 md:py-2 rounded-md"
      >
        <option value="en">English</option>
        <option value="de">German</option>
        <option value="sw">Swahili</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
