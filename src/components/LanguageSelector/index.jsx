import { Dropdown } from "flowbite-react";
import { useTranslation } from "react-i18next";

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();

  return (
    <div className="absolute top-2 right-2 z-50 opacity-75">
      <Dropdown
        label={t(`language.${localStorage.getItem("i18nextLng") ?? "vi"}`)}
      >
        <Dropdown.Item
          onClick={() => {
            localStorage.setItem("i18nextLng", "en");
            i18n.changeLanguage("en");
          }}
        >
          {t("language.en")}
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            localStorage.setItem("i18nextLng", "vi");
            i18n.changeLanguage("vi");
          }}
        >
          {t("language.vi")}
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}
